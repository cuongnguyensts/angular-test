import { Attributes } from './attributes.model';
import { Links } from './links.model';
import { Relationships } from './relationships.model';

export interface Book {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}
