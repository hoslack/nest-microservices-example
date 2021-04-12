import { Controller, Logger } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { MathService } from './math.service'

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}
  private logger = new Logger('AppController')

  @MessagePattern('add')
  async accumulate(data: number[]): Promise<number> {
    return this.mathService.accumulate(data)
  }
}
