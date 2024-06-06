import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()//Resolver GraphQl
@Entity()//typeORM
export class Country extends BaseEntity {
  //Country devient ainsi un "active records" pour update,sauvegarder,... 
  //on intervient directement sur la classe (exemple: 'Country.save()
  //sans BaseEntity il faudrait passer par une fonctionnalité pour faire la sauvegarde dans cet exemple
  @Field()//type GraphQL
  @PrimaryGeneratedColumn()//typeORM
  id: number;

  @Field()
  @Column({ length:3 })
  code: string;

  @Field()
  @Column({ length: 200 })
  name: string;

  @Field()
  @Column({ length:15 })
  emoji: string;
  
  @Field()
  @Column({ length: 25 })
  continent: string;
}