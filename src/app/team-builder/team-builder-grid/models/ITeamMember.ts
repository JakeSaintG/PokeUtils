export interface ITeamMember {
    name: string,
    img: string,
    types: string[]
    megaData: {
        canMegaEvo: boolean,
        megaForms: string[]
    },
    canGigantamax: boolean,
    baseStats: {
        hp: number,
        atk: number,
        def: number,
        spAtk: number,
        spDef: number,
        spd: number
    }
  }