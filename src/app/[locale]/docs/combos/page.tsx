import type { Metadata } from "next";
import { DocHeader, DocPage, H2, P, Rich } from "@/components/docs/doc-page";
import { Preview } from "@/components/docs/preview";
import ComboAvatarConfetti from "@/docs/examples/combo-avatar-confetti";
import ComboCartoonSet from "@/docs/examples/combo-cartoon-set";
import ComboCelebrateToast from "@/docs/examples/combo-celebrate-toast";
import ComboConfettiButton from "@/docs/examples/combo-confetti-button";
import { getT } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = (await getT()).tr.docs.guides.combos;
  return { title, description };
}

export default async function Combos() {
  const { tr } = await getT();
  const page = tr.app.docs.combos;

  return (
    <DocPage
      toc={[
        { id: "confetti", title: page.toc.confetti },
        { id: "avatar", title: page.toc.avatar },
        { id: "toast", title: page.toc.toast },
        { id: "tokens", title: page.toc.tokens },
        { id: "rule", title: page.toc.rule },
      ]}
    >
      <DocHeader description={page.description} title={tr.docs.guides.combos.title} />

      <H2 id="confetti">{page.confettiTitle}</H2>
      <P>
        <Rich text={page.confetti} />
      </P>
      <Preview Component={ComboConfettiButton} file="combo-confetti-button" minHeight="min-h-40" />

      <H2 id="avatar">{page.avatarTitle}</H2>
      <P>
        <Rich text={page.avatar} />
      </P>
      <Preview Component={ComboAvatarConfetti} file="combo-avatar-confetti" minHeight="min-h-40" />

      <H2 id="toast">{page.toastTitle}</H2>
      <P>
        <Rich text={page.toast} />
      </P>
      <Preview Component={ComboCelebrateToast} file="combo-celebrate-toast" minHeight="min-h-40" />

      <H2 id="tokens">{page.tokensTitle}</H2>
      <P>
        <Rich text={page.tokens} />
      </P>
      <Preview Component={ComboCartoonSet} file="combo-cartoon-set" />

      <H2 id="rule">{page.ruleTitle}</H2>
      <P>
        <Rich text={page.rule} />
      </P>
    </DocPage>
  );
}
