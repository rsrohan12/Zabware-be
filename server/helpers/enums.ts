export const RECORD_LIMIT = 10;
export const BY_DEFAULT_ROWS = 25;
export const STRING_SEP = "þöþ";
export const QR_CONSTANT = "qr";
export const COMP_MASTER_ID = 1;


export enum UserTypeEnum {
  ADMIN = 1,
  ULB = 2,
  USER = 3,
}

export enum UserStatusEnum {
  ACTIVE = 1,
  CLOSED = 2,
  SUSPENDED = 3,
}

export enum UsersTypeEnum {
  ADMIN = 1,
  USER = 2,
}

export enum YesNoOptionEnum {
  YES = 1,
  NO = 2,
}


export enum PropertyOwnershipEnum {
  SELF = 1,
  RENTAL = 2,
}

export enum PropertyUsageEnum {
  SELF_RESIDENTIAL = 1,
  RENTAL_RESIDENTIAL = 2,
  SELF_COMMERCIAL = 3,
  RENTAL_COMMERCIAL = 4,
}

export enum RelationTypeEnum {
  SON_OF = 1,
  DAUGHTER_OF = 2,
  WIFE_OF = 3,
}


export enum RecordStatusEnum {
  UNDEFINED = 0,
  APPROVED = 1,
  REJECTED = 2,
  MOBILE = 3,
  EXCEL = 4,
}


export enum MenuPermissionEnum {

  BLOCK_ADD = 1,
  BLOCK_EDIT = 2,
  BLOCK_DELETE = 3,
  BLOCK_VIEW = 10,


  COLONY_ADD = 4,
  COLONY_EDIT = 5,
  COLONY_DELETE = 6,
  COLONY_VIEW = 11,

  PTS_ADD = 7,
  PTS_EDIT = 8,
  PTS_DELETE = 9,
  PTS_VIEW = 12,
  PTS_EXCEL = 13,
  PTS_PDF = 14,

  PTS_PHOTO_DOWNLOAD = 15,
  PTS_PHOTO_DELETE = 17,
  PTS_PHOTO_VIEW = 18,

  PTS_EXCEL_ADD = 21,
  PTS_EXCEL_EDIT = 22,
  PTS_EXCEL_DELETE = 23,
  PTS_EXCEL_VIEW = 24,
  PTS_EXCEL_EXCEL = 25,
  PTS_EXCEL_PDF = 26,

  PTS_A3_ADD = 27,
  PTS_A3_EDIT = 28,
  PTS_A3_DELETE = 29,
  PTS_A3_VIEW = 30,
  PTS_A3_EXCEL = 31,
  PTS_A3_PDF = 32,

  PTS_NEW_ID_ADD = 33,
  PTS_NEW_ID_EDIT = 34,
  PTS_NEW_ID_DELETE = 35,
  PTS_NEW_ID_VIEW = 36,
  PTS_NEW_ID_EXCEL = 37,
  PTS_NEW_ID_PDF = 38,
  PTS_NEW_ID_MODAL_EDIT = 39,

  PTS_SUMMARY_VIEW = 40,

  PTS_A3_COPY_ADD = 41,
  PTS_A3_COPY_EDIT = 42,
  PTS_A3_COPY_DELETE = 43,
  PTS_A3_COPY_VIEW = 44,
  PTS_A3_COPY_EXCEL = 45,
  PTS_A3_COPY_PDF = 46,

  PTS_DETAIL_ADD = 47,
  PTS_DETAIL_EDIT = 48,
  PTS_DETAIL_DELETE = 49,
  PTS_DETAIL_VIEW = 50,
  PTS_DETAIL_EXCEL = 51,
  PTS_DETAIL_PDF = 52,
}

