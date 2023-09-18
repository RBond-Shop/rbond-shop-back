import { Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Contacts } from './entities/contact.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contacts)
    private readonly contactRepository: Repository<Contacts>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const contacts = await this.contactRepository.create(createContactDto)
    return this.contactRepository.save(contacts)
  }

  async findAll() {
    return await this.contactRepository.find()
  }

  async findOne(id: number) {
    return await this.contactRepository.findOneBy({ id: id })
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    await this.contactRepository.update(id, updateContactDto)
    return this.contactRepository.findOneBy({ id: id })
  }

  async remove(id: number) {
    const contacts = await this.contactRepository.findOneBy({ id: id })
    if (!contacts) {
      throw new Error('Contacts can not be found')
    }
    return await this.contactRepository.remove(contacts)
  }
}
