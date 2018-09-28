import { allowRooting } from "../../root";
import { Task as TaskTemplate } from "../../store/interfaces";
import store from "../../store/store";
import Checkbox from "../checkbox/checkbox";

export default class Task extends HTMLElement {
    private task: TaskTemplate;
    private checkbox: Checkbox;
    private tasktext: HTMLSpanElement;
    private subtasks: HTMLElement;
    private node: DocumentFragment;

    constructor(task: TaskTemplate) {
        super();

        this.task = task;

        const template: HTMLTemplateElement = document.querySelector("#task") as HTMLTemplateElement;
        this.node = document.importNode(template.content, true);
        this.appendChild(this.node);

        this.id = task.id;

        this.subtasks = this.querySelector("footer") as HTMLElement;

        this.checkbox = new Checkbox(task.id);
        this.checked = task.checked;

        this.tasktext = document.createElement("span");
        if (task.text) {
            this.tasktext.innerText = task.text;
        }

        this.tasktext.setAttribute("contenteditable", "true");

        const header: HTMLElement = this.querySelector("header") as HTMLElement;
        header.appendChild(this.checkbox);
        header.appendChild(this.tasktext);

        (this.querySelector("header > a") as HTMLElement).addEventListener("click", this.onLinkClick);
        this.tasktext.addEventListener("keypress", this.onKeyPress);
        this.tasktext.addEventListener("blur", this.updateText);

        this.checkbox.addEventListener("change", this.onStatusChange);
    }

    get expanded(): boolean {
        return this.hasAttribute("expanded");
    }

    set expanded(val: boolean) {
        if (val) {
            this.setAttribute("expanded", "true");
        } else {
            this.removeAttribute("expanded");
        }
    }

    get hasSubtasks(): boolean {
        return this.hasAttribute("has-subtasks");
    }

    set hasSubtasks(val: boolean) {
        if (val) {
            this.setAttribute("has-subtasks", "true");
        } else {
            this.removeAttribute("has-subtasks");
        }
    }

    get root(): boolean {
        return this.hasAttribute("root");
    }

    set root(val: boolean) {
        if (val) {
            this.setAttribute("root", "true");
        } else {
            this.removeAttribute("root");
        }
    }

    get ancestor(): boolean {
        return this.hasAttribute("ancestor");
    }

    set ancestor(val: boolean) {
        if (val) {
            this.setAttribute("ancestor", "true");
        } else {
            this.removeAttribute("ancestor");
        }
    }

    get isPinned(): boolean {
        return this.hasAttribute("is-pinned");
    }

    set isPinned(val: boolean) {
        if (val) {
            this.setAttribute("is-pinned", "true");
        } else {
            this.removeAttribute("is-pinned");
        }
    }

    get checked(): boolean {
        return this.hasAttribute("checked");
    }

    set checked(val: boolean) {
        if (val) {
            this.setAttribute("checked", "true");
        } else {
            this.removeAttribute("checked");
        }

        this.checkbox.checked = val;
    }

    get textElement(): HTMLSpanElement {
        return this.tasktext;
    }

    public addSubtask(task: Task): void {
        task.remove();
        this.subtasks.appendChild(task);

        this.expanded = true;
        this.hasSubtasks = true;
    }

    public freezeText(): void {
        this.tasktext.removeAttribute("contenteditable");
    }

    public parent(): Task|null {
        const candidate: HTMLElement | null = (this.parentElement as HTMLElement).parentElement;
        if (candidate instanceof Task) {
            return candidate;
        }

        return null;
    }

    private addSubtaskBefore = (task: Task, nextSibling: Task): void => {
        this.expanded = true;

        task.remove();
        this.subtasks.insertBefore(task, nextSibling);
    }

    private onLinkClick = (e: Event): void => {
        e.preventDefault();
        if (this.hasSubtasks) {
            this.expanded = !this.expanded;
        } else {
            this.pin();
        }
    }

    private pin = (): void => {
        this.isPinned = !this.isPinned;
    }

    private onKeyPress = (e: KeyboardEvent): void => {
        if (e.shiftKey) {
            switch (e.keyCode) {
            case 9: // tab
                e.preventDefault();
                this.unshift();
                break;
            }

            return;
        }

        if (e.ctrlKey) {
            switch (e.keyCode) {
            case 8: // backspace
                e.preventDefault();
                this.drop();
                break;
            case 13: // enter
                e.preventDefault();
                this.toggleStatus();
                break;
            case 38: // ArrowUp
                e.preventDefault();
                this.expanded = false;
                break;
            case 40: // ArrowDown
                e.preventDefault();
                this.expanded = true;
                break;
            }

            return;
        }

        switch (e.keyCode) {
        case 9: // tab
            e.preventDefault();
            this.shift();
            break;
        case 13: // enter
            e.preventDefault();
            this.addSibling();
            break;
        case 38: // ArrowUp
            e.preventDefault();
            this.moveFocusUp();
            break;
        case 40: // ArrowDown
            e.preventDefault();
            this.moveFocusDown();
            break;
        }
    }

    private removeSubtask = async (id: string): Promise<void> => {
        this.task.children = this.task.children.filter((cid: string): boolean => cid !== id);
        if (this.task.children.length === 0) {
            this.hasSubtasks = false;
            this.expanded = false;
        }

        await store.update(this.task);
    }

    private drop = async (): Promise<void> => {
        const parent: Task = this.parent() as Task;
        this.remove();

        await Promise.all([
            parent.removeSubtask(this.id),
            store.remove(this.task),
        ]);
    }

    private addSibling = async (): Promise<void> => {
        if (this.hasAttribute("root")) {
            return;
        }

        const parent: Task = this.parent() as Task;

        const nextSibling: Task|null = this.nextSibling as Task|null;

        if (!nextSibling) {
            const newTask: TaskTemplate = await store.create(parent.task);
            const newTaskElement: Task = new Task(newTask);
            parent.addSubtask(newTaskElement);
            allowRooting(newTaskElement);
            (newTaskElement.tasktext as HTMLElement).focus();
        } else {
            const newTask: TaskTemplate = await store.createBefore(parent.task, nextSibling.task);
            const newTaskElement: Task = new Task(newTask);
            parent.addSubtaskBefore(newTaskElement, nextSibling);
            allowRooting(newTaskElement);
            (newTaskElement.tasktext as HTMLElement).focus();
        }
    }

    private shift = async (): Promise<void> => {
        if (this.hasAttribute("root")) {
            return;
        }

        const prevSibling: Task|null = this.previousSibling as Task|null;
        if (!prevSibling) {
            return;
        }

        const pos: number = this.getCursorPosition();

        const parent: Task = this.parent() as Task;
        parent.removeSubtask(this.task.id);

        prevSibling.task.children.push(this.task.id);
        await store.update(prevSibling.task);

        prevSibling.addSubtask(this);
        this.tasktext.focus();
        this.setCursorPosition(pos);
    }

    private unshift = async (): Promise<void> => {
        if (this.hasAttribute("root")) {
            return;
        }

        const parent: Task = this.parent() as Task;
        const grandParent: Task = parent.parent() as Task;
        if (!grandParent || !(grandParent instanceof Task)) {
            return;
        }

        const pos: number = this.getCursorPosition();

        const nextSibling: Task = parent.nextSibling as Task;

        if (!nextSibling) {
            grandParent.task.children.push(this.id);
            grandParent.addSubtask(this);
        } else {
            const idx: number = grandParent.task.children.indexOf(nextSibling.id);
            grandParent.task.children.splice(idx, 0, this.id);
            grandParent.addSubtaskBefore(this, nextSibling);
        }

        await Promise.all([
            parent.removeSubtask(this.task.id),
            store.update(grandParent.task),
        ]);

        this.tasktext.focus();
        this.setCursorPosition(pos);
    }

    private updateText = async (): Promise<void> => {
        this.task.text = this.tasktext.innerText;
        if (this.task.text) {
            await store.update(this.task);
        } else {
            await this.drop();
        }
    }

    private onStatusChange = async (e: Event): Promise<void> => {
        this.checked = (e.target as HTMLInputElement).checked;
        await this.setStatus(this.checked);
    }

    private toggleStatus = async (): Promise<void> => {
        this.checked = !this.checked;
        await this.setStatus(this.checked);
    }

    private setStatus = async (status: boolean): Promise<void> => {
        this.task.checked = status;
        await store.update(this.task);
    }

    private moveFocusUp = async (): Promise<void> => {
        const element: Task = this.previousSibling as Task;
        if (element) {
            this.moveFocus(element);
            return;
        }

        const parent: Task = this.parent() as Task;
        if (!parent.root) {
            this.moveFocus(parent);
        }
    }

    private moveFocusDown = async (): Promise<void> => {
        const element: Task = this.nextSibling as Task;
        if (element) {
            this.moveFocus(element);
        }
    }

    private moveFocus = (task: Task): void => {
        const pos: number = this.getCursorPosition();
        this.tasktext.blur();

        task.tasktext.focus();
        task.setCursorPosition(pos);
    }

    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Selection
     * https://developer.mozilla.org/en-US/docs/Web/API/range
     */

    private getCursorPosition = (): number => {
        const selection: Selection = window.getSelection();
        if (selection.rangeCount) {
            const range: Range = selection.getRangeAt(0);
            if (range.commonAncestorContainer.parentNode === this.tasktext) {
                return range.endOffset;
            }
        }

        return 0;
    }

    private setCursorPosition = (pos: number): void => {
        if (!this.tasktext.childNodes || !this.tasktext.childNodes.length) {
            return;
        }

        const range: Range = document.createRange();
        range.setStart(this.tasktext.childNodes[0], pos);
        range.collapse(true);

        const sel: Selection = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}

window.customElements.define("x-task", Task);