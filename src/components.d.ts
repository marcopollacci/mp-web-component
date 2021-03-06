/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IpopulateList } from "./components/mp-select-image-option/mp-select-image-option.model";
export namespace Components {
    interface MpFontAwesome {
        "stringFontAwesome": string;
    }
    interface MpSelectImageOption {
        "defaultIcon"?: string;
        "disabled": boolean;
        "populateList": IpopulateList[];
        "readonly": boolean;
        "value": string;
    }
    interface MpTextDescription {
        "titleComponent": string;
    }
}
declare global {
    interface HTMLMpFontAwesomeElement extends Components.MpFontAwesome, HTMLStencilElement {
    }
    var HTMLMpFontAwesomeElement: {
        prototype: HTMLMpFontAwesomeElement;
        new (): HTMLMpFontAwesomeElement;
    };
    interface HTMLMpSelectImageOptionElement extends Components.MpSelectImageOption, HTMLStencilElement {
    }
    var HTMLMpSelectImageOptionElement: {
        prototype: HTMLMpSelectImageOptionElement;
        new (): HTMLMpSelectImageOptionElement;
    };
    interface HTMLMpTextDescriptionElement extends Components.MpTextDescription, HTMLStencilElement {
    }
    var HTMLMpTextDescriptionElement: {
        prototype: HTMLMpTextDescriptionElement;
        new (): HTMLMpTextDescriptionElement;
    };
    interface HTMLElementTagNameMap {
        "mp-font-awesome": HTMLMpFontAwesomeElement;
        "mp-select-image-option": HTMLMpSelectImageOptionElement;
        "mp-text-description": HTMLMpTextDescriptionElement;
    }
}
declare namespace LocalJSX {
    interface MpFontAwesome {
        "stringFontAwesome"?: string;
    }
    interface MpSelectImageOption {
        "defaultIcon"?: string;
        "disabled"?: boolean;
        "onChoosedValue"?: (event: CustomEvent<string>) => void;
        "populateList"?: IpopulateList[];
        "readonly"?: boolean;
        "value"?: string;
    }
    interface MpTextDescription {
        "titleComponent"?: string;
    }
    interface IntrinsicElements {
        "mp-font-awesome": MpFontAwesome;
        "mp-select-image-option": MpSelectImageOption;
        "mp-text-description": MpTextDescription;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "mp-font-awesome": LocalJSX.MpFontAwesome & JSXBase.HTMLAttributes<HTMLMpFontAwesomeElement>;
            "mp-select-image-option": LocalJSX.MpSelectImageOption & JSXBase.HTMLAttributes<HTMLMpSelectImageOptionElement>;
            "mp-text-description": LocalJSX.MpTextDescription & JSXBase.HTMLAttributes<HTMLMpTextDescriptionElement>;
        }
    }
}
