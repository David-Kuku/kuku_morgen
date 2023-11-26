export const displayErrorMsg = (errorText: string, variable: string, submitting: boolean) => {
  if (submitting && !variable) {
    return <div className='text-[red] text-left text-[11px]'>{errorText}</div>;
  }
};

export const checkPasswords = (password: string, confirm: string, errorText: string) => {
  if(confirm && password !== confirm){
    return <div className='text-[red] text-left text-[11px]'>{errorText}</div>;

  }
}