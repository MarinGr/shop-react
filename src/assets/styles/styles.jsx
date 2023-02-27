export const sectionPadding = `
max-width: 1440px;
padding: 140px 0;
margin: 0 auto;
width: 100%;

@media (max-width: 1024px) {
    padding: 80px 0;
}

@media (max-width: 990px) {
    padding: 60px 20px;
    max-width: 100vw;
}

`;

export const sectionTitle = `
font-family: var(--font-family-secondary);
font-weight: 700;
font-size: 36px;
line-height: 140%;

@media (max-width: 420px) {
    font-size: 24px; 
    line-height: 120%;
}
`;

export const pageTitle = `
font-family: var(--font-family-secondary);
font-weight: 700;
font-size: 44px;
line-height: 120%;
margin-bottom: 60px;
`;

export const iconWrapper = `
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
cursor: pointer;
`;

export const cardsContainer = `
display: flex;
align-items: flex-start;
flex-wrap: wrap;
gap: 30px;

@media (max-width: 990px) {
    justify-content: center;
  }
`;
