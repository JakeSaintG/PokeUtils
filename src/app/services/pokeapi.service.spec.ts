import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PokeApiService } from './pokeapi.service';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpClientTestingModule ],
      providers: []
    });
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('filterForPokeAPI', () => {

    it('should return the desired name for use with PokeAPI', () => {
      //Arrange
      let namesToTest = ["mew", "pidgeot", "ivy", "nivy", "type: null", "flabébé", "nidoran♀", "farfetch'd", "fsdafjasdf", "mega swampert", "galarian zigzagoon", "gigantamax duraludon"]

      //Act - taken directly from PokeAPI
      service.masterList = [
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon-form/2/" },
        { name: "pidgeotto", url: "https://pokeapi.co/api/v2/pokemon-form/17/" },
        { name: "pidgeot", url: "https://pokeapi.co/api/v2/pokemon-form/18/" },
        { name: "nidoran-f", url: "https://pokeapi.co/api/v2/pokemon-form/29/" },
        { name: "nidoran-m", url: "https://pokeapi.co/api/v2/pokemon-form/32/" },
        { name: "farfetchd", url: "https://pokeapi.co/api/v2/pokemon-form/83/" },
        { name: "mewtwo", url: "https://pokeapi.co/api/v2/pokemon-form/150/" },
        { name: "mew", url: "https://pokeapi.co/api/v2/pokemon-form/151/" },
        { name: "snivy", url: "https://pokeapi.co/api/v2/pokemon-form/495/" },
        { name: "type-null", url: "https://pokeapi.co/api/v2/pokemon-form/772/" },
        { name: "flabebe-red", url: "https://pokeapi.co/api/v2/pokemon-form/669/" },
        { name: "flabebe-white", url: "https://pokeapi.co/api/v2/pokemon-form/670/" },
        { name: "swampert-mega", "url": "https://pokeapi.co/api/v2/pokemon-form/10166/" },
        { name: "zigzagoon-galar", "url": "https://pokeapi.co/api/v2/pokemon-form/10333/" },
        { name: "duraludon-gmax", "url": "https://pokeapi.co/api/v2/pokemon-form/10394/" }
      ];

      let SUT:string[] = [];
      namesToTest.forEach(e => {
        let test = service.filterForPokeAPI(e)
        console.log(test)
        SUT.push(test);
      });

      console.log(SUT)
      
      //Assert
      expect(SUT[0]).toEqual("mew");
      expect(SUT[1]).toEqual("pidgeot");
      expect(SUT[2]).toEqual("ivysaur");
      expect(SUT[3]).toEqual("snivy");
      expect(SUT[4]).toEqual("type-null");
      expect(SUT[5]).toEqual("flabebe");
      expect(SUT[6]).toEqual("nidoran-f");
      expect(SUT[7]).toEqual("farfetchd");
      expect(SUT[8]).toEqual("missingno");
      expect(SUT[9]).toEqual("swampert-mega");
      expect(SUT[10]).toEqual("zigzagoon-galar");
      expect(SUT[11]).toEqual("duraludon-gmax");
    });
  });
});
