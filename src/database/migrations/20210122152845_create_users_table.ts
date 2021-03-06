import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.integer('foobar');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

