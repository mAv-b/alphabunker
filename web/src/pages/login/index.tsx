import { LoginModal } from '../../components/LoginModal'
import { RegisterModal } from '../../components/RegisterModal'

interface loginData {
    cpf: string
    password: string
}

interface clientData {
    fullName: string
    birthDate: string
    cpf: string
    email: string
    password: string
}

export function Login() {
    return (
        <>
            <svg width="93" height="104" viewBox="0 0 93 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.49329" y="1.60352" width="89.531" height="101.18" fill="#7FB2AC" stroke="#29454D" stroke-width="2" />
                <path d="M11.2106 26.9185C11.2106 24.7093 13.0014 22.9185 15.2106 22.9185H52.5435C54.7526 22.9185 56.5435 24.7093 56.5435 26.9185V102.783H11.2106V26.9185Z" fill="white" stroke="#29454D" stroke-width="2" />
                <path d="M29.2038 48.823H26.8742L32.1086 34.2775H34.6441L39.8785 48.823H37.549L33.4367 36.9196H33.3231L29.2038 48.823ZM29.5944 43.127H37.1512V44.9735H29.5944V43.127Z" fill="#19888C" />
                <path d="M17.2977 62.9563C17.2977 62.404 17.7455 61.9563 18.2977 61.9563H21.0275H23.7572C24.3095 61.9563 24.7572 62.404 24.7572 62.9563V76.3966C24.7572 76.9489 24.3095 77.3966 23.7572 77.3966H21.0275H18.2977C17.7455 77.3966 17.2977 76.9489 17.2977 76.3966V62.9563Z" fill="#7FB2AC" />
                <path d="M21.0275 57.9521V61.9563M21.0275 61.9563H18.2977C17.7455 61.9563 17.2977 62.404 17.2977 62.9563V76.3966C17.2977 76.9489 17.7455 77.3966 18.2977 77.3966H21.0275M21.0275 61.9563H23.7572C24.3095 61.9563 24.7572 62.404 24.7572 62.9563V76.3966C24.7572 76.9489 24.3095 77.3966 23.7572 77.3966H21.0275M21.0275 77.3966V81.9008" stroke="#29454D" stroke-width="2" stroke-linecap="round" />
                <rect x="62.0668" y="48.3518" width="20.5327" height="25.0788" rx="3" fill="#19888C" stroke="#29454D" stroke-width="2" />
                <path d="M69.4282 58.5655C69.4282 59.4661 68.6982 60.1962 67.7976 60.1962C66.897 60.1962 66.1669 59.4661 66.1669 58.5655C66.1669 57.6649 66.897 56.9348 67.7976 56.9348C68.6982 56.9348 69.4282 57.6649 69.4282 58.5655Z" fill="#29454D" />
                <path d="M69.3284 63.4305C69.3284 64.3311 68.5983 65.0612 67.6977 65.0612C66.7971 65.0612 66.067 64.3311 66.067 63.4305C66.067 62.5299 66.7971 61.7998 67.6977 61.7998C68.5983 61.7998 69.3284 62.5299 69.3284 63.4305Z" fill="#29454D" />
                <path d="M69.3281 68.296C69.3281 69.1966 68.5981 69.9266 67.6975 69.9266C66.7969 69.9266 66.0668 69.1966 66.0668 68.296C66.0668 67.3954 66.7969 66.6653 67.6975 66.6653C68.5981 66.6653 69.3281 67.3954 69.3281 68.296Z" fill="#29454D" />
                <path d="M74.0635 58.5655C74.0635 59.4661 73.3334 60.1962 72.4328 60.1962C71.5322 60.1962 70.8021 59.4661 70.8021 58.5655C70.8021 57.6649 71.5322 56.9348 72.4328 56.9348C73.3334 56.9348 74.0635 57.6649 74.0635 58.5655Z" fill="#29454D" />
                <path d="M73.9636 63.4305C73.9636 64.3311 73.2336 65.0612 72.333 65.0612C71.4324 65.0612 70.7023 64.3311 70.7023 63.4305C70.7023 62.5299 71.4324 61.7998 72.333 61.7998C73.2336 61.7998 73.9636 62.5299 73.9636 63.4305Z" fill="#29454D" />
                <path d="M73.9634 68.296C73.9634 69.1966 73.2333 69.9266 72.3327 69.9266C71.4321 69.9266 70.702 69.1966 70.702 68.296C70.702 67.3954 71.4321 66.6653 72.3327 66.6653C73.2333 66.6653 73.9634 67.3954 73.9634 68.296Z" fill="#29454D" />
                <path d="M78.699 58.5655C78.699 59.4661 77.9689 60.1962 77.0683 60.1962C76.1677 60.1962 75.4376 59.4661 75.4376 58.5655C75.4376 57.6649 76.1677 56.9348 77.0683 56.9348C77.9689 56.9348 78.699 57.6649 78.699 58.5655Z" fill="#29454D" />
                <path d="M78.5994 63.4305C78.5994 64.3311 77.8693 65.0612 76.9687 65.0612C76.0681 65.0612 75.338 64.3311 75.338 63.4305C75.338 62.5299 76.0681 61.7998 76.9687 61.7998C77.8693 61.7998 78.5994 62.5299 78.5994 63.4305Z" fill="#29454D" />
                <path d="M78.5991 68.296C78.5991 69.1966 77.8691 69.9266 76.9685 69.9266C76.0679 69.9266 75.3378 69.1966 75.3378 68.296C75.3378 67.3954 76.0679 66.6653 76.9685 66.6653C77.8691 66.6653 78.5991 67.3954 78.5991 68.296Z" fill="#29454D" />
                <path d="M68.0219 53.664C68.0219 52.8518 68.6803 52.1934 69.4925 52.1934H75.7522C76.5644 52.1934 77.2228 52.8518 77.2228 53.664C77.2228 54.4762 76.5644 55.1346 75.7522 55.1346H69.4925C68.6803 55.1346 68.0219 54.4762 68.0219 53.664Z" fill="#29454D" />
                <circle cx="72.4329" cy="35.5541" r="7.30675" fill="white" stroke="#29454D" stroke-width="2" />
            </svg>
            {/* <img alt="logo" src="logo.svg" /> */}
            <h1>Alpha Bunker</h1>
            
            {/* <LoginModal></LoginModal> */}
            <RegisterModal></RegisterModal>

        </>
    )
};