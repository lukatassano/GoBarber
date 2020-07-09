import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEmailOnTableUser1594152312838 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'date');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'email',
        type: 'varchar',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'email');

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'date',
        type: 'timestamp with time zone',
        isUnique: true,
      }),
    );
  }
}
