import { Mutation, Query, Resolver, Arg, Ctx } from "type-graphql";
import { Country } from "../entities/country";
//import { MyContext } from "../types";


@Resolver(Country)
export class CountryResolver {
  @Mutation(() => Country)
  async CreateCountry(
    @Arg('code') code: string,
    @Arg('name') name: string,
    @Arg('emoji') emoji: string,
    @Arg('continent') continent: string,
    //@Ctx() { user: User }: MyContext
  ) : Promise<Country> {
    //Pour vérifier si le pays existe déjà avec le même code
    if (await Country.countBy({ code: code })>0) {
      throw new Error("Country already exists");  
    };
    const country = await Country.create({ code, name, emoji, continent }).save();
    return country;
  }

  @Query(() => [Country])
  async getCountries(): Promise<Country[]> {
    return Country.find();
  }

  @Query(() => Country, { nullable: true })
  async getCountryByCode(
    @Arg('code') code: string
  ): Promise<Country | null> {
    return Country.findOne({ where: { code } });
  }

  @Query(() => [Country])
  async getCountriesByContinent(
    @Arg('continent') continent: string
  ): Promise<Country[]> {
    return Country.find({ where: { continent } });
  }
}

