import Image from 'next/image'
import styles from '../../styles/Forms.module.css'
export const RegisterForm = () => {
    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form}>
                <header className="form_header">
                    <span className="form-logo">
                        <Image src="/assets/devchallenges.svg"  alt='page logo' width={'130.17px'} height={'18px'}/>
                    </span>
                    <h1 className="form-title f-sub-1">Join thousands of learners from around the world</h1>
                    <p className="form-description f-body-1">Master web development by making real-life projects. There are multiple paths for you to chooose</p>
                </header>
                <form className={styles.form_content}>
                    <input className='input-field' type="email" placeholder="Email"/>
                    <input className='input-field' type="password" placeholder="Password"/>
                    <button type="submit" className="btn primary">Start coding now</button>
                </form>
                <footer className="form-footer">
                    <div className={styles.form_providers}>
                        <span className='f-body-2'>or continue with these social profile</span>
                        <div className={styles.providers_inner}>
                            <Image src={'/assets/Google.svg'} width="42px" height="42px" />
                            <Image src={'/assets/Facebook.svg'} width="42px" height="42px" />
                            <Image src={'/assets/Twitter.svg'} width="42px" height="42px" />
                            <Image src={'/assets/Github.svg'} width="42px" height="42px" />
                        </div>
                        <span className='f-body-2'>Adready a member? <a className='link' href='/login'>Login</a></span>
                    </div>
                </footer>
            </div>
            <div className={styles.creator_by}>
                <span className='f-body-2'>created by <span className="f-body-2-bold">yeric17@gmail.com</span></span>
                <span className='f-body-2'>devChallenges.io</span>
            </div>
        </div>
    )
}