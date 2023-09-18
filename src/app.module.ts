import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ContactsModule } from './contacts/contacts.module'
import { Contacts } from './contacts/entities/contact.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PGHOST,
      port: 5432,
      username: process.env.PGUSER,
      password: process.env.PGPASSWORD,
      database: process.env.PGDATABASE,
      entities: [Contacts],
      synchronize: true,
      ssl: {
        // Set SSL mode to 'require' to ensure a secure connection
        rejectUnauthorized: false, // You can set this to true in production if needed
      },
    }),
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
