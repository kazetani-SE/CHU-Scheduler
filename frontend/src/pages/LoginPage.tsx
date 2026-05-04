import {Input} from "../components/ui/input.tsx";
import {ROUTES} from "../router/routes.tsx";
import {ArrowLeft, ArrowRight, Circle, Eye, EyeClosed} from "lucide-react";
import {useState} from "react";
import {Button} from "../components/ui/button.tsx";
import googleLogo from "../assets/google-logo.png";
import EmptyAvatar from "../components/EmptyAvatar.tsx";
import {Link, useNavigate} from "react-router-dom";
import {Checkbox} from "../components/ui/checkbox.tsx";
import {Card} from "../components/ui/card.tsx";
import type {LoginRequest} from "../types/auth.ts";
import {useAuth} from "../hooks/auth/useAuth.ts";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="flex flex-row justify-between w-full h-[100vh] relative overflow-hidden">
            <SlidingDoor isLogin={isLogin} setIsLogin={setIsLogin} />

            <LoginPart/>

            <RegisterPart/>
        </div>
    );
}

function LoginPart() {
    const [canSee, setCanSee] = useState(false);
    const [request, setRequest] = useState<LoginRequest>({email: "", password: ""});
    const [error, setError] = useState<string>("")
    const {login} = useAuth();
    const navigate = useNavigate();

    const showPassword = () => setCanSee(prev => !prev);

    // Just enter any email and password, it will accept all
    const handleSubmit = async (request: LoginRequest) => {
        if (!request.email || !request.password) {
            setError("Email and password are required");
            return;
        }
        setError("");
        try{
            const user = await login(request);
            if(!user){
                console.error("User not found");
                return;
            }
            console.log(user);
            navigate(ROUTES.MAIN_PAGE);
        }catch(error){
            console.error("Login failed:", error);
            setError("Email or password incorrect!");
        }

    }

    return (
        <div className="flex flex-col justify-center items-center
         w-1/2 p-[5vw] gap-[5vh] ml-[-6vw]">
            <h1 className="text-3xl font-semibold font-[Georgia]">
                Login to your Account
            </h1>

            <h2 className="opacity-80 text-xl">
                Welcome back!
            </h2>

            <div className="flex flex-col items-start justify-start gap-2
            w-[60%] select-none ">
                <div className="w-full">
                    <label className="opacity-50">Email</label>
                    <Input className=" border-0 border-b-2 border-b-gray-500
                    focus:ring-gray-50 w-full"
                           required={true}
                           value={request.email}
                           onChange={(e) => setRequest(prev => ({ ...prev, email: e.target.value }))}
                    />
                </div>

                <div className="w-full relative">
                    <label className="opacity-50">Password</label>
                    <div className="relative">
                        <Input
                            className="border-0 border-b-2 border-b-gray-500 focus:ring-gray-50 w-full pr-10"
                            type={!canSee ? 'password' : 'text'}
                            required={true}
                            value={request.password}
                            onChange={(e) => setRequest(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <div
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70"
                            onClick={showPassword}
                        >
                            {canSee ? <Eye/> : <EyeClosed/>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-end
                opacity-50 underline italic cursor-pointer">
                    Forgot password?
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex w-full justify-center items-center mt-[2vh]">
                    <Button
                        className={`bg-slate-600 text-white text-[2.4vh] rounded-full 
                    w-[10vw] h-[5.2vh] cursor-pointer`}
                        onClick={() => handleSubmit(request)}
                    >
                        Login
                    </Button>
                </div>
            </div>

            <div className="flex justify-center w-[15vw] mt-[2vh] relative">
                <div className="bg-gray-300 w-full h-[0.1vh]"></div>
                <div className="flex justify-center absolute text-gray-500 mt-[-1.7vh] bg-white w-[2vw]">
                    or
                </div>
            </div>

            <div className="flex flex-row w-full justify-center items-center gap-1 cursor-pointer">
                <img className="w-[4vh]"
                     src={googleLogo} alt="Google Logo"/>
                Sign in with Google
            </div>
        </div>
    );
}

function SlidingDoor({isLogin, setIsLogin}:
                      { isLogin: boolean,
                      setIsLogin: React.Dispatch<React.SetStateAction<boolean>>}) {
    const sliding = () => {
        return isLogin ? "ml-[40vw]" : "";
    }

    const setSliding = () => {
        setIsLogin(prev => !prev);
    }

    return (
        <div className={`flex flex-row justify-center items-center
            bg-blue-600 h-[100vh] w-[60%] absolute z-10
            transition-all duration-300 ${sliding()} overflow-hidden`}
        >

            {/*TOP CIRCLE*/}
            <div className="w-[20vw] h-[20vw] absolute z-[2] rounded-full bg-blue-500 overflow-hidden
            mb-[45vw] ml-[-50vw]">
            </div>

            {isLogin ?
                <div className="flex flex-col justify-center items-start gap-2 z-[5]">
                    <h1 className="text-3xl font-semibold font-[Georgia] text-blue-100 opacity-85">
                        CHU scheduler
                    </h1>

                    <h1 className="text-[5.6vh] font-semibold font-[Georgia] text-blue-50">
                        Good to see you again !
                        <br/>
                        Sign in to keep moving forward.
                    </h1>

                    <h1 className="text-xl font-semibold font-[Georgia] text-blue-100 opacity-85">
                        Your schedule is waiting —
                        <br/>
                        don’t let deadlines slip away.
                    </h1>

                    <div className="flex flex-row w-[20vw] h-[7.4vh] my-[3vh]">
                        <EmptyAvatar
                            className="!border-blue-600 !bg-blue-400 !text-blue-50 mr-[-1vh] !border-4"
                            name={"Phong"}
                        />
                        <EmptyAvatar
                            className="!border-blue-600 !bg-blue-500 !text-blue-50 mr-[-1vh] !border-4"
                            name={"Ngoc Thanh"}
                        />
                        <EmptyAvatar
                            className="!border-blue-600 !bg-blue-700 !text-blue-50 mr-[-1vh] !border-4"
                            name={"NL"}
                        />
                        <EmptyAvatar
                            className="!border-blue-600 !bg-blue-800 !text-blue-50 !border-4 !text-lg"
                            name={"+99"}
                        />
                    </div>

                    <h1 className="text-xl font-semibold font-[Georgia] text-blue-100 opacity-85">
                        Join 12,400 people using CHU
                    </h1>

                    <Button
                        className="text-blue-50/75 text-2xl bg-blue-400/40
                      border-2 border-blue-100/50 h-[8vh] rounded-2xl mt-[4vh]
                      flex items-center justify-center gap-2 cursor-pointer
                      hover:border-blue-50/75 hover:translate-x-[-1vh] hover:text-white"
                        onClick={setSliding}
                    >
                        <ArrowLeft className="!w-6 !h-6" strokeWidth={4}/>
                        <span>Don’t have an account?</span>
                    </Button>
                </div>
                :
                <div className="flex flex-col justify-center items-start gap-2 z-[5]">
                    <h1 className="text-3xl font-semibold font-[Georgia] text-blue-100 opacity-85">
                        Start for free
                    </h1>

                    <h1 className="text-[5.6vh] font-semibold font-[Georgia] text-blue-50">
                        Managing your calendar just got
                        <br/>
                        easier than ever
                    </h1>

                    <div className="flex flex-col justify-start w-2/3 gap-4 mt-[1vh]">
                        <Card className=" flex flex-row items-center gap-3
                    w-full bg-blue-100/15 border-none ring-0 text-white
                    font-bold px-[1.5vw] py-[1.5vh] text-xl">
                            <Circle className="w-5 h-5 stroke-green-400 fill-green-400"/> Smart scheduling
                        </Card>

                        <Card className=" flex flex-row items-center gap-3
                    w-full bg-blue-100/15 border-none ring-0 text-white
                    font-bold px-[1.5vw] py-[1.5vh] text-xl">
                            <Circle className="w-5 h-5 stroke-green-400 fill-green-400"/> Seamless Group Coordination
                        </Card>

                        <Card className=" flex flex-row items-center gap-3
                    w-full bg-blue-100/15 border-none ring-0 text-white
                    font-bold px-[1.5vw] py-[1.5vh] text-xl">
                            <Circle className="w-5 h-5 stroke-green-400 fill-green-400"/> Dynamic Schedule Agility
                        </Card>
                    </div>

                    <Button
                        className="text-blue-50/75 text-2xl bg-blue-400/40
                      border-2 border-blue-100/50 h-[8vh] rounded-2xl mt-[4vh]
                      flex items-center justify-center gap-2 cursor-pointer
                      hover:border-blue-50/75 hover:translate-x-[-1vh] hover:text-white"
                        onClick={setSliding}
                    >
                        <span>Already have an account?</span>
                        <ArrowRight className="!w-6 !h-6" strokeWidth={4}/>
                    </Button>
                </div>
            }

            {/*BOTTOM RIGHT SHAPE*/}
            <div className="w-[50vw] h-[50vw] absolute z-[2] rounded-full border-2 border-blue-500 overflow-hidden
            mt-[30vw] ml-[60vw]">
            </div>

            <div className="w-[30vw] h-[30vw] absolute z-[2] rounded-full border-2 border-blue-500 overflow-hidden
            mt-[34vw] ml-[50vw]">
            </div>
        </div>
    );
}

function RegisterPart(){
    const [canSee, setCanSee] = useState(false);

    const showPassword = () => setCanSee(prev => !prev);

    return (
        <div className="flex flex-col justify-center items-center
        bg-white w-1/2 p-[5vw] gap-[5vh] mr-[-6vw]"
        >
            <h1 className="text-4xl font-semibold font-[Georgia]">
                Create Account
            </h1>

            <div className="flex flex-row w-full justify-center items-center gap-1 cursor-pointer mt-[-2vh]">
                <img className="w-[4vh]"
                     src={googleLogo} alt="Google Logo" />
                Continue with Google
            </div>

            <div className="flex justify-center w-[15vw] relative">
                <div className="bg-gray-300 w-full h-[0.1vh]"></div>
                <div className="flex justify-center absolute text-gray-500 mt-[-1.7vh] bg-white w-fit px-[1vh]">
                    or use email
                </div>
            </div>

            <div className="flex flex-col items-start justify-start gap-2
            w-[60%] select-none ">
                <div className="w-full">
                    <label className="opacity-50">User name</label>
                    <Input className=" border-0 border-b-2 border-b-gray-500
                    focus:ring-gray-50 w-full"/>
                </div>

                <div className="w-full">
                    <label className="opacity-50">Email</label>
                    <Input className=" border-0 border-b-2 border-b-gray-500
                    focus:ring-gray-50 w-full"/>
                </div>

                <div className="w-full relative">
                    <label className="opacity-50">Password</label>
                    <div className="relative">
                        <Input
                            className="border-0 border-b-2 border-b-gray-500 focus:ring-gray-50 w-full pr-10"
                            type={!canSee ? 'password' : 'text'}
                        />
                        <div
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70"
                            onClick={showPassword}
                        >
                            {canSee ? <Eye/> : <EyeClosed/>}
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
                    <label className="opacity-50">Confirm Password</label>
                    <div className="relative">
                        <Input
                            className="border-0 border-b-2 border-b-gray-500 focus:ring-gray-50 w-full pr-10"
                            type={!canSee ? 'password' : 'text'}
                        />
                        <div
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer opacity-70"
                            onClick={showPassword}
                        >
                            {canSee ? <Eye/> : <EyeClosed/>}
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center w-[50vw] mt-[2vh] gap-3 h-fit">
                    <Checkbox className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500
                    data-[state=checked]:text-white border-2 border-gray-500 cursor-pointer"/>
                    <p className="text-base text-gray-600">
                        I agree to the{" "}
                        <Link to={ROUTES.TERMS} className="text-blue-600 hover:underline font-bold">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to={ROUTES.PRIVACY} className="text-blue-600 hover:underline font-bold">
                            Privacy Policy
                        </Link>.
                    </p>
                </div>

                <div className="flex w-full justify-center items-center mt-[3vh]">
                    <Button
                        className={`bg-slate-600 text-white text-[2.4vh] rounded-full 
                    w-[10vw] h-[5.2vh] cursor-pointer`}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}