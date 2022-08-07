export interface INatures {
    natures: INature[]
};

export interface INature {
    name: string,
    stats: {
        atk: number
        def: number
        spAtk: number
        spDef: number
        spd: number
    }
}