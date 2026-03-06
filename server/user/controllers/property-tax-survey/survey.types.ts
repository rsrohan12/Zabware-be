export type FloorData = {
  type: string;

  self_rental: "self" | "rental";

  sub_cat: string | number;

  cov_area: string | number;

  trade_license?: string | null;

  occupies_name: string;

  rent_value: string | number;

  firm?: string;
};


export type PropertyTaxSurveyPayload = {
  block?: string ;
  id?: string ;
  parcel_id?: string ;

  unit_no?: string;
  page?: number;

  land_status?: number | string;

  lat?: number;
  lng?: number;

  pmidc?: string | number;
  floor_data?:FloorData[],
  paper_mode?: string;

  owner_name?: string;
  father_husband_name?: string;
  guardian?: string;

  house_flat_no?: string;
  road_name?: string;
  locality_name?: string;

  image_id?: string ;

  mobile?: string;
  email?: string;

  pin_code?: string | number;

  const_yr?: number;
  Age_Of_Building?: number | string; // age of building

  const_type?:  string;

  builtup_area_sqft?: number;
  builtup_area?: number;

  merla?: number;
  yard?: number;
  sqft?: number;

  plot_area_biswa?: number;

  property_use?:  string;

  floor_no?: string;

  does_base?: boolean | number;

  sewer_no?: string | number;
  water_no?: string | number;
  electricity_no?: string | number;

  property_tax_id?: string | number;
  disposal_id?: string | number;

  street_light_option?: number | boolean;

  respondent_name?: string;
  ipAddress?:string,
  property_use_text:any,
};
