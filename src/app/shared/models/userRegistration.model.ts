import { BaseModel } from "./base.model";

export interface userRegistrationModel extends BaseModel {
    urgid: number | null;
    urgName: string | null;
    urgUsername: string | null;
    urgphone: string | null;
    urgactive: number | null;
    urgadddate: Date | null;
    urgactivationdate: Date | null;
    urgactivationuser: string | null;
    urgpersonalemail: string | null;
    urgprofessionalemail: string | null;
    urgsecretq1: string | null;
    urgsecreta1: string | null;
    urgsecretq2: string | null;
    urgsecreta2: string | null;
    urgprofilepicture: string | null;
    urgsmtpport: number | null;
    urgsmtpserver: string | null;
    urgenablessl: number | null;
    urgisdeveloper: boolean;
    urgisimplementer: boolean;
    urgemailprofile: string | null;
    urgUserpassword: string | null;
    urgloginlimitedtoipaddress: number | null;
    urgloginOTPsendmethod: number | null;
    urgloginOTPrequired: number | null;
  }