import * as S from "./style";

function AboutPage() {
  return (
    <S.Container>
      <S.H2>About Me</S.H2>
      <S.Content>
        <S.UserInfo>
          <img
            src="https://github.com/MarcelinoGNeto.png"
            alt="imagem de perfil do Marcelino"
            style={{
              borderRadius: "100%",
              width: "100px",
              marginBottom: "16px",
            }}
          />
          <S.H3>Marcelino Gomes Neto</S.H3>
          <S.Text>Desenvolvedor Frontend ReactJs | NextJs</S.Text>
        </S.UserInfo>
        <S.Section>
          <S.H3>Sobre</S.H3>
          <S.Text>
            Estou no mercado de TI há pouco mais de 3 anos, e durante minha
            trajetória como Dev front tive a oportunidade para trabalhar em
            grandes projetos onde pude desenvolver valiosas habilidades com
            HTML, CSS, Javascript/Typescript, ReactJS, React-Native, Angular,
            NodeJS, Java, figma e Adobe XD. Sempre próximo dos times de design,
            participei ativamente do processo de criação da identidade visual e
            da experiência dos usuários. Culminando na construção de poderosas
            aplicações em vários setores, como saúde, construção civil, seguros
            e varejo.
          </S.Text>
          <S.Text>
            Sou muito comprometido com minhas responsabilidades, também colaboro
            com outras pessoas, tenho muito a aprender e o que sei gosto de
            compartilhar.
          </S.Text>
        </S.Section>
        <S.Section>
          <S.H3>Formação</S.H3>
          <S.Text>
              <strong>Faculdade VINCIT</strong>
            </S.Text>
            <S.Text>
            Pós-Graduação - Arquitetura de software em Java, Tecnologia da Informação · (agosto de 2023 - fevereiro de 2024)
            </S.Text>
          <S.Text>
              <strong>UNOPAR - Universidade Norte do Paraná</strong>
            </S.Text>
            <S.Text>
            Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas · (2013 - 2015)
            </S.Text>
        </S.Section>
        <S.Section>
          <S.H3>Principais Stacks</S.H3>
          <S.Text>
            <li>Typescript</li>
            <li>ReactJs</li>
            <li>NextJS</li>
            <li>React-Native</li>
            <li>Git</li>
          </S.Text>
        </S.Section>
        <S.Section>
          <S.H3>Principais XP</S.H3>
          <S.XpContent>
            <S.Text>
              <strong>Empresa</strong>: Opah IT
            </S.Text>
            <S.Text>
              <strong>Período</strong>: out de 2023 - o momento · 6 meses
            </S.Text>
            <S.Text>
              <strong>Atividades:</strong>
            </S.Text>
            <S.Text>
              Os desafios desse projeto está na implementação e melhoria de
              funcionalidades da plataforma web do cliente e seus parceiros,
              utilizando tecnologias como ReactJs, NextJs, Typescript, CSS,
              HTML, API Rest, contextApi, axios, e etc.
            </S.Text>
          </S.XpContent>
          <S.XpContent>
            <S.Text>
              <strong>Empresa</strong>: Grupo GF
            </S.Text>
            <S.Text>
              <strong>Período</strong>: outubro de 2021 - outubro de 2023 · 2
              anos 1 mês
            </S.Text>
            <S.Text>
              <strong>Atividades:</strong>
            </S.Text>
            <S.Text>
              Trabalhar na GFT me deu valiosas experiências no desenvolvimento
              por ter atuado em projetos de grandes clientes, como o grupo
              Fleury da área da saúde, Share/Mitre da construção civil, e Stix
              Fidelidade app da área de varejo do grupo Pão de Açúcar. Me dando
              habilidades para atuar com ênfase no front-end, mobile e um
              pezinho no back-end. Em ambos, a linguagem principal foi
              Javascript/Typescript, utilizando libs e frameworks como React.JS,
              React-Native, Next, Node.Js, além de HTML, CSS/Sass, GraphQL,
              Apollo, Gatsby, controle de versionamento (GIT), metodologia de
              agilidade SCRUM, padrões de projetos DESIGN PATTERNS, e afins.
            </S.Text>
          </S.XpContent>
          <S.XpContent>
            <S.Text>
              <strong>Empresa</strong>: Trabalhar para a 2R.P.A foi o pontapé
              inicial em minha carreira como desenvolvedor. Atuei como
              freelancer, o que me qualificou para diversas oportunidades,
              principalmente utilizando no back-end o Java e todo seu
              ecossistema (Spring Boot, Maven, MVC, JPA, Hibernate) e no
              Database tive experiências com SqlServer, Oracle, MySQL,
              PostgreSQL e MongoDB. Também pude atuar em projetos front-end
              utilizando HTML, CSS, Javascript/Typescript, Angular. Em ambos os
              projetos, trabalhei com versionamento e Integração contínua (Git e
              GitHub/GitLab) e com metodologias ágeis como o SCRUM.
            </S.Text>
            <S.Text>
              <strong>Período</strong>: abr de 2020 - abr de 2021 · 1 ano 1 mês
            </S.Text>
            <S.Text>
              <strong>Atividades:</strong>
            </S.Text>
            <S.Text>
              Trabalhar para a 2R.P.A foi o pontapé inicial em minha carreira
              como desenvolvedor. Atuei como freelancer, o que me qualificou
              para diversas oportunidades, principalmente utilizando no back-end
              o Java e todo seu ecossistema (Spring Boot, Maven, MVC, JPA,
              Hibernate) e no Database tive experiências com SqlServer, Oracle,
              MySQL, PostgreSQL e MongoDB. Também pude atuar em projetos
              front-end utilizando HTML, CSS, Javascript/Typescript, Angular. Em
              ambos os projetos, trabalhei com versionamento e Integração
              contínua (Git e GitHub/GitLab) e com metodologias ágeis como o
              SCRUM.
            </S.Text>
          </S.XpContent>
        </S.Section>
      </S.Content>
    </S.Container>
  );
}

export default AboutPage;
