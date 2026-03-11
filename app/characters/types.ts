export interface value {
  keyname: string;
  type: string;
  metadata: {
    [key: string]: any;
  };
  value: any;
}

interface component {
  component_id: string;
  name: string;
  values: value[];
}

export interface character {
  name: string;
  components: component[];
}
