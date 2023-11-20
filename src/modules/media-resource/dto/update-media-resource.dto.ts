import { PartialType } from '@nestjs/mapped-types';
import { CreateMediaResourceDto } from './create-media-resource.dto';

export class UpdateMediaResourceDto extends PartialType(CreateMediaResourceDto) {}
