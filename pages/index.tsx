import { GetStaticPropsContext, GetStaticPropsResult, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({someValueFromTheServer}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { locales, pathname, asPath, query } = useRouter();

  return (
    <footer>
      <p>{someValueFromTheServer}</p>
      <ul>
        {locales?.map((l) => (
          <li key={l}>
            <Link locale={l} href={{ pathname, query }} as={asPath}>
              <a>{l}</a>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export const getStaticProps = (ctx: GetStaticPropsContext) => {
  return {
    props: {
      someValueFromTheServer: ctx.locale || ctx.defaultLocale,
    }, revalidate: 60,
  }
}
