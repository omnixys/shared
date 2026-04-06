import { LogLevel } from '../enums/log.enum.js';
import { TraceContextDTO } from './trace.dto.js';

export interface LogDTO {
  level: LogLevel;
  message: string;
  service: string;
  operation: string;
  topic: string;
  traceContext?: TraceContextDTO;
  timestamp: string;
  metadata?: Record<string, unknown>;
}
