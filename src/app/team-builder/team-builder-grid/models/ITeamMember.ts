export interface ITeamMember {
    name: string,
    img: string,
    types: string[]
    megaData: {
        canMegaEvo: boolean,
        megaForms: string[]
    },
    canGigantamax: boolean,
    stats: {
        hp: number,
        attack: number,
        defense: number,
        spAtk: number,
        spDef: number,
        speed: number
    }
  }