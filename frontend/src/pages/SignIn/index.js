import React from 'react';
import {PageArea} from './styled';
import {PageContainer,PageTitle} from '../../components/MainComponents';

const Page = () => {
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                <form>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email"></input>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password"/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar senha</div>
                        <div className="area--input">
                            <input type="checkbox" className="box"/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button>Fazer login</button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;