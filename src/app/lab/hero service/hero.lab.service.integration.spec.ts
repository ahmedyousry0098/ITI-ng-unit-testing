import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.lab.service';
import { Hero } from '../../hero';

describe("3-hero service (http) integration testing:", () => {
  let heroService: HeroServiceForLab;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroServiceForLab],
    });

    heroService = TestBed.inject(HeroServiceForLab);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it("get heroes function, send request and receive response successfully", () => {
    const dummyHeroes: Hero[] = [{ id: 1, name: 'Hero 1' }, { id: 2, name: 'Hero 2' }];

    heroService.getHeroes().subscribe((heroes) => {
      expect(heroes).toEqual(dummyHeroes);
    });

    const req = httpTestingController.expectOne('http://localhost:4200/heroes');
    expect(req.request.method).toBe('GET');
    req.flush(dummyHeroes);
  });

  it("updateHero function: send request and receive response successfully", () => { })
});
