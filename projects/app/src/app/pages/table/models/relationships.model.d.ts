import { Links } from './links.model';

export interface Relationships {
  authors: { links: Links };
  publishers: { links: Links };
}
