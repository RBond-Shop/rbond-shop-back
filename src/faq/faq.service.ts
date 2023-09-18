import { Injectable } from '@nestjs/common'
import { CreateFaqDto } from './dto/create-faq.dto'
import { UpdateFaqDto } from './dto/update-faq.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Faq } from './entities/faq.entity'
import { Repository } from 'typeorm'

@Injectable()
export class FaqService {
  constructor(
    @InjectRepository(Faq)
    private readonly faqRepository: Repository<Faq>,
  ) {}

  async create(createFaqDto: CreateFaqDto) {
    const faq = this.faqRepository.create(createFaqDto)
    return await this.faqRepository.save(faq)
  }

  async findAll() {
    return await this.faqRepository.find()
  }

  async findOne(id: number) {
    return await this.faqRepository.findOneBy({ id: id })
  }

  async update(id: number, updateFaqDto: UpdateFaqDto) {
    await this.faqRepository.update(id, updateFaqDto)
    return this.faqRepository.findOneBy({ id: id })
  }

  async remove(id: number) {
    const faq = await this.faqRepository.findOneBy({ id: id })
    if (!faq) {
      throw new Error('FAQ not found')
    }
    await this.faqRepository.remove(faq)
  }
}
