'use client';

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/hooks/useStorage'
import { useState, useEffect } from 'react';
import BasicDialog from '../dialogs/BasicDialog';
import Button from '@/components/basic/button/Button';
import { ColorNames, ColorShades } from '@/components/basic/colors';

export default function CookieBanner(){
  const [cookieConsent, setCookieConsent] = useState(false);
  const [openedDialog, setOpenedDialog] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent])

    
    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        if (cookieConsent != null) {
          setOpenedDialog(false)
        } else {
          setOpenedDialog(true)
        }

    }, [cookieConsent]);

  return (
    <BasicDialog position="bottom" title='Termos de Uso dos Cookies 🍪' open={openedDialog}>
      <>
        <div className='p-4 dark:text-white overflow-auto my-4' style={{
          width: '700px',
          height: '200px'
        }}>
          <p>Caro usuário,</p>
          <p>Antes de prosseguir em nosso website, solicitamos que você leia atentamente os seguintes termos de uso de cookies. Ao continuar a navegar em nosso site, você estará concordando expressamente com o uso dos seus dados de acordo com as premissas da Lei Geral de Proteção de Dados (LGPD).</p>

          <h2 className='mt-2'>1. O que são cookies?</h2>
          <p>Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo (computador, smartphone, tablet, etc.) quando você visita nosso site. Eles permitem que o site se lembre de suas ações e preferências, como idioma, login e outras configurações, para proporcionar uma experiência personalizada e mais eficiente.</p>

          <h2 className='mt-2'>2. Quais tipos de cookies utilizamos?</h2>
          <ul>
            <li className='my-2'><strong>Cookies Necessários:</strong> Esses cookies são essenciais para o funcionamento adequado do site e não podem ser desativados. Eles garantem funções básicas, como navegação entre páginas e acesso a áreas seguras do site.</li>
            <li className='my-2'><strong>Cookies de Desempenho:</strong> Estes cookies coletam informações anônimas sobre como os usuários interagem com nosso site. Utilizamos essas informações para aprimorar o desempenho e a usabilidade do site.</li>
            <li className='my-2'><strong>Cookies de Funcionalidade:</strong> Esses cookies permitem que o site se lembre das escolhas feitas por você, como nome de usuário, idioma e região, para proporcionar uma experiência mais personalizada.</li>
            <li className='my-2'><strong>Cookies de Publicidade:</strong> Utilizamos cookies de terceiros para exibir anúncios relevantes a você com base em seus interesses. Esses cookies registram sua visita ao nosso site e a compartilham com outras empresas de publicidade.</li>
          </ul>

          <h2 className='mt-2'>3. Como gerenciar cookies?</h2>
          <p>Você pode optar por aceitar ou recusar cookies a qualquer momento. Para isso, você pode ajustar as configurações do seu navegador para bloquear ou remover cookies. No entanto, ressaltamos que a desativação de cookies essenciais pode afetar a funcionalidade do site.</p>

          <h2 className='mt-2'>4. Compartilhamento de dados:</h2>
          <p>As informações coletadas por meio dos cookies são tratadas de acordo com nossa Política de Privacidade. Não compartilhamos seus dados pessoais com terceiros sem o seu consentimento explícito, a menos que seja exigido por lei.</p>

          <h2 className='mt-2'>5. Política de Privacidade:</h2>
          <p>Ao aceitar esses termos de uso de cookies, você também concorda com nossa Política de Privacidade, que descreve em detalhes como coletamos, usamos, armazenamos e protegemos seus dados pessoais.</p>

          <p>Ao clicar em Permitir Cookies, você está confirmando que leu e compreendeu nossos termos de uso de cookies e nossa Política de Privacidade.</p>

          <p>Caso tenha alguma dúvida ou queira mais informações, entre em contato com nossa equipe de suporte.</p>

          <p>Agradecemos sua confiança em nosso site!</p>
        </div>

        <div className='flex gap-2'>
          <Button onClick={() => setCookieConsent(false)} className='dark:text-white text-gray' flat>Não permitir</Button>
          <Button onClick={() => setCookieConsent(true)}>Permitir Cookies</Button>
        </div>
      </>
    </BasicDialog>
  )
}