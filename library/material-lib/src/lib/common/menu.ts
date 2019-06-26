export interface MenuElement {
    route_url?: string;
    icon?: string;
    text: string;
    _child?: MenuElement[];
}

export interface BarWidget {
    route_url?: string;
    icon?: string;
    text?: string;
    tooltip?: string;
    _child?: MenuElement[];
}

