export interface ITeamMember {
    name: string
    guid: string
    img: string
    types: string[]
    forms: string[]
    abilities: string[]
    isAdvancedForm: boolean
    megaForms: string[]
    gigantamaxForms: string[]
    baseStats: {
        hp: number
        atk: number
        def: number
        spAtk: number
        spDef: number
        spd: number
    }
    nature: {
      name: string,
      statsChange: {
        atk: number
        def: number
        spAtk: number
        spDef: number
        spd: number
      }
    },
    calcStats: {
      hp: number
      atk: number
      def: number
      spAtk: number
      spDef: number
      spd: number
  }
}

export interface ITeam {
  hasAdvancedFrom: boolean,
  teamList: ITeamMember[]
}