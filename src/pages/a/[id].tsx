import React from "react";
import { GetServerSidePropsContext } from "next";
import Layout from "@/components/Layout";
import { Actor as ActorType } from "@/lib/types";
import { Actor } from "@/components/Actor";
import { getActorByName } from "@/lib/queries";

type Props = {
  actor: ActorType;
};

const ActorPage: React.FC<Props> = (props) => {
  return (
    <Layout>
      <main>
        <Actor actor={props.actor} />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const param = ctx.params?.id;
  if (!param || typeof param !== "string") {
    throw new Error("No actor ID");
  }

  const actor = await getActorByName(param);
  return {
    props: { actor },
  };
};

export default ActorPage;
