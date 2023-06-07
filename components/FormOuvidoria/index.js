import React from 'react';
import styles from './FormOuvidoria.module.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const OuvidoriaForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert('Obrigado por ajudar a SouJunior a crescer');
      resetForm();
      setSubmitting(false);
    }, 500);
  };

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required('O campo Nome completo é obrigatório.'),
    email: Yup.string().email('E-mail inválido.').required('O campo E-mail é obrigatório.'),
    assunto: Yup.string().oneOf(['Sugestão', 'Reclamação', 'Elogio'], '').required('*Escolha um opção por favor.'),
    mensagem: Yup.string().required('O campo Mensagem é obrigatório.')
  });

  return (
      
    <section className={styles.container}>
    
      <section className={styles.content}>
        <div className={styles.left}>
              <h1>Ouvidoria!</h1>
              
              <p>
              Seja bem-vindo(a) à nossa Ouvidoria! <br/><br/><br/>
          Estamos sempre buscando maneiras de melhorar nossos produtos e serviços, e sua opinião é extremamente importante.<br/>
          Por isso, criamos um canal exclusivo para que você possa registrar suas reclamações e sugestões.
          </p>
        </div>

        <div className={styles.rigth}>
          <img src="/assets/ouvidoria.png" alt="imagem de uma atendente ao telefone" />
        </div>
      
      </section>


    
      <section className={styles.form}>
        <h2>Conte sua opinião pra gente!</h2>
        <Formik
          initialValues={{
            nome: '',
            email: '',
            assunto: '',
            mensagem: ''
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form className={styles.formik}>
              <div>
                <label>Nome completo:</label>
                <Field type="text" name="nome" maxLength={100} className={styles.input} />
                <ErrorMessage name="nome" component="div" className={styles.errorMessage} />
              </div>
              <div>
                <label>E-mail:</label>
                <Field type="email" name="email" className={styles.input} />
                <ErrorMessage name="email" component="div" className={styles.errorMessage} />
              </div>
              <div className={styles.options}>
                <label className={styles.about}></label>
                <Field as="select" name="assunto" className={styles.select}>
                  <option value="">Selecione o assunto</option>
                  <option value="Sugestão">Sugestão</option>
                  <option value="Reclamação">Reclamação</option>
                  <option value="Elogio">Elogio</option>
                </Field>
                <ErrorMessage name="assunto" component="div" className={styles.errorMessage} />
              </div>
              <div>
                <label>Mensagem:</label>
                <Field as="textarea" name="mensagem" maxLength={3200} className={styles.textarea}/>
                <span className={styles.count}>Caracteres restantes: {3200 - values.mensagem.length}</span>
                {values.mensagem.length > 3200 && (
                  <span className={styles.count} style={{ color: 'red' }}>Limite de caracteres excedido.</span>
                )}
                <ErrorMessage name="mensagem" component="div" className={styles.errorMessage} />
              </div>
              <div>
                <button type="submit" >
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default OuvidoriaForm;
