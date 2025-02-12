"use client"

import AuthContainer from "../containers/AuthContainer"
import Input from "../general/Input"
import Button from "../general/Button"
import { useForm,SubmitHandler, FieldValues} from "react-hook-form"
import { FaGoogle } from "react-icons/fa"
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast"
import { signIn } from "next-auth/react"

const LoginClient = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FieldValues>()

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            if(callback?.ok){
                router.push('/cart')
                router.refresh();
                toast.success('Giriş Başarılı.')
            }

            if(callback?.error){
                toast.error(callback.error)
            }
        })
      }


      const goToLogin = () => {
        router.push('/login');
    
        }; 

        const goToRegister = () => {  
          router.push('/register');
        }

  return (
    <AuthContainer>
    <div className="text-center w-full md:w-[500px] p-10 shadow-lg rounded-mg">
    <div className="text-center items-center justify-center flex mb-4">
        <button 
          onClick={goToLogin}
          className="w-1/2 mx-2 text-xl font-bold text-blue-500 hover:text-blue-500 transition duration-300 border border-blue-500 px-4 py-2 rounded-md"
        >
          Giriş Yap
        </button>
        <button 
          onClick={goToRegister}
          className="w-1/2 mx-2 text-xl font-bold text-blue-300 hover:text-blue-500 transition duration-300"
        >
          Kayıt Ol
        </button>
      </div>
      <Input id="email" placeholder="E-posta" disabled={false} type="email" required={true} register={register} errors={{errors}}/>
      <Input id="password" placeholder="Şifreniz" disabled={false} type="password" required={true} register={register} errors={{errors}}/>
      <div className="flex flex-col justify-center w-full mt-2">
      <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)}/>
      <div className="py-4 font-bold">OR</div>
      <Button text="Google ile Giriş Yap" icon={FaGoogle} onClick={() => {}} small={false} outline={false} disabled={false}/>
      </div>


    </div>
    </AuthContainer>
  )
}

export default LoginClient