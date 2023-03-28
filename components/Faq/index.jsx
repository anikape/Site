import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import Title from "../commons/Title";
import styles from "./Faq.module.css";
import { souJunior, mentor, voluntario } from "../../utils/faqItems";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export const Faq = () => {
  const [souJr, setSouJr] = useState(false);
  const [icon, setIcon] = useState(IoMdAdd);

  return (
    <>
    <section className={styles.faqContainer}>
      <div className={styles.tabContainer}>
        <Tabs>
          <TabList className={styles.tabList}>
            <Tab >
              <Title><h1 className={styles.titleH1} > Sou Junior</h1></Title>
              
            </Tab>
            <Tab>
              <Title>
              <h1 className={styles.titleH1}> Voluntário</h1></Title>
            </Tab>
            <Tab>
              <Title><h1 className={styles.titleH1}>Mentor/Apoiador</h1></Title>
            </Tab>
          </TabList>
          <TabPanel className={styles.tabPanel}>

            <Accordion>
              {souJunior.map(({ titulo, descricao, id }) => (
                <AccordionItem className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                   <p className={styles.accordionP}>{descricao} </p> 
                                   </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>

          <TabPanel>
            <Accordion>
              {mentor.map(({ titulo, descricao, id }) => (
                <AccordionItem  className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                 <p className={styles.accordionP}>{descricao}</p> 
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
          <TabPanel>
            <Accordion >
              {voluntario.map(({ titulo, descricao, id }) => (
                <AccordionItem className={styles.accordionItem} key={id} header=<h1 className={styles.accordionh1}>{titulo}</h1>>
                  <p className={styles.accordionP}>{descricao} </p>
                  
                </AccordionItem>
              ))}
            </Accordion>
          </TabPanel>
        </Tabs>
      </div>
    </section>

    <section className={styles.formSection}>
      <h1>Não encontrou sua dúvida, fale conosco!</h1>
      <h3>Preencha o formulário e entraremos em contato!</h3>
    </section>

   </>
  );

};