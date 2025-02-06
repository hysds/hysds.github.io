import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Scalability & Performance',
    Svg: require('@site/static/img/scalability-icon.svg').default,
    description: "Industry-leading processing capacity with 8,000+ parallel nodes handling over 3 million daily jobs and hundreds of terabytes of scientific data."
  },
  {
    title: 'Hybrid-Cloud Flexibility',
    Svg: require('@site/static/img/hybrid-cloud-icon.svg').default,
    description: "First-ever science data system to seamlessly operate across multiple platforms including AWS, GCP, Azure, and NASA HECC with built-in cost optimization.",
  },
  {
    title: 'Multi-Mission Excellence',
    Svg: require('@site/static/img/excellence-icon.svg').default,
    description: "Trusted by 33+ NASA projects including NISAR, SWOT, and SMAP, with a thriving community of 50+ developers advancing Earth Science missions.",
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}



