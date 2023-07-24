import {
    IsEmail,
    IsString,
    IsNotEmpty
  } from "class-validator";
  
  import { Expose } from "class-transformer";
  
  /* 
  
      {
          "email": "juan.perez@example.com", -> String
          "tel": "+1234567890" -> String
      }
  */
  
  export class auth {
    @Expose()
    @IsEmail({}, { message: 'El correo no es válido' })
    @IsNotEmpty({ message: 'El campo email no puede estar vacío' })
    email: string;
  
    @Expose()
    @IsNotEmpty({ message: 'El campo tel no puede estar vacío' })
    @IsString({ message: 'El campo tel debe ser un string' })
    tel: string;
  }