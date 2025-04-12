import { BaseModel } from "./base.model";

export interface wvsdUserRegistration extends BaseModel {
    urgid?: number;
    urgName?: string;
    urgUsername?: string;
    urgphone?: string;
    urgactive?: number;
    urgadddate?: Date;
    urgactivationdate?: Date;
    urgactivationuser?: string;
    urgpersonalemail?: string;
    urgprofessionalemail?: string;
    urgsecretq1?: string;
    urgsecreta1?: string;
    urgsecretq2?: string;
    urgsecreta2?: string;
    urgprofilepicture?: string;
    urgsmtpport?: number;
    urgsmtpserver?: string;
    urgenablessl?: number;
    urgisdeveloper?: boolean;
    urgisimplementer?: boolean;
    urgemailprofile?: string;
    urgUserpassword?: string;
    urgloginlimitedtoipaddress?: number;
    urgloginOTPsendmethod?: number;
    urgloginOTPrequired?: number;
  }