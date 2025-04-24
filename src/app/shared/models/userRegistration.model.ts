import { FormControl, FormGroup } from "@angular/forms";
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



export interface userRegistrationFormGroup extends FormGroup {
  controls: {
    urgid?: FormControl<number | null>;
    urgName?: FormControl<string | null>;
    urgUsername?: FormControl<string | null>;
    urgphone?: FormControl<string | null>;
    urgactive?: FormControl<number | null>;
    urgadddate?: FormControl<Date | null>;
    urgactivationdate?: FormControl<Date | null>;
    urgactivationuser?: FormControl<string | null>;
    urgpersonalemail?: FormControl<string | null>;
    urgprofessionalemail?: FormControl<string | null>;
    urgsecretq1?: FormControl<string | null>;
    urgsecreta1?: FormControl<string | null>;
    urgsecretq2?: FormControl<string | null>;
    urgsecreta2?: FormControl<string | null>;
    urgprofilepicture?: FormControl<string | null>;
    urgsmtpport?: FormControl<number | null>;
    urgsmtpserver?: FormControl<string | null>;
    urgenablessl?: FormControl<number | null>;
    urgisdeveloper?: FormControl<boolean>;
    urgisimplementer?: FormControl<boolean>;
    urgemailprofile?: FormControl<string | null>;
    urgUserpassword?: FormControl<string | null>;
    urgloginlimitedtoipaddress?: FormControl<number | null>;
    urgloginOTPsendmethod?: FormControl<number | null>;
    urgloginOTPrequired?: FormControl<number | null>;
  }
}
