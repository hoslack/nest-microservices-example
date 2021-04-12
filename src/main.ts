import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { TcpOptions, Transport } from '@nestjs/microservices'
import { AppModule } from './app.module'

const logger = new Logger('Main')

const bootstrap = async () => {
  const app = await NestFactory.createMicroservice<TcpOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877
    }
  })
  app.listen(() => logger.log('Microservice is listening'))
}
bootstrap()
