import SignInForm from "../../components/signin/signinform/signinform";
import BottleBlock from "../../components/signin/bottleblock/bottleblock";

import css from "./signin.module.css";

export default function SignInPage() {
  return (
    <div className="">
      <SignInForm />
      <BottleBlock />
    </div>
  );
}
