export interface ResultResponse {
  DrawResults: Array<DrawResultType>;
  ErrorInfo: ErrorInfoType;
  Success: boolean;
}

export interface ErrorInfoType {
  ContactSupport: boolean;
  DisplayMessage: string;
  ErrorNo: number;
  SupportErrorReference: string;
  SystemId: number;
}

export interface DrawResultType {
  DrawNumber: number;
  PrimaryNumbers: Array<number>;
  SecondaryNumbers: Array<number>;
  DrawDisplayName: string;
  DrawDate: string;
  ProductId: string;
}
