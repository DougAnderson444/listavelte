import { SvelteComponentTyped } from "svelte";
import './app.css';
declare const __propDef: {
    props: {
        todos?: {
            id: string | number;
            done: boolean;
            high: boolean;
            description: string;
        }[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ListProps = typeof __propDef.props;
export declare type ListEvents = typeof __propDef.events;
export declare type ListSlots = typeof __propDef.slots;
export default class List extends SvelteComponentTyped<ListProps, ListEvents, ListSlots> {
}
export {};
