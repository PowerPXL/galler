import ContentCard from "@/components/ContentCard";
import ContentBlock from "@/components/ContentBlock";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <ContentBlock title="next-canvas by Pavent">
        Run the steps below to get started
      </ContentBlock>
      
            <ContentCard
        blockTitle="INSTALL, COPY and RUN"
        items={[
          {
            title: "Install",
            text: "npx create-next-app@latest",
          },
          {
            title: "COPY",
            text: "/components/\n\n/app/layout.tsx\n/app/page.tsx\n/app/globals.css\n\n/app/faq/\n/app/kontakt/\n/app/login/\n\n/lib/ ",
          },
          {
            title: "RUN",
            text: "npm run dev",
          },
          
        ]}
      />

                  <ContentCard
        blockTitle="ADD 2 Git"
        items={[
          {
            title: "Repo",
            text: "Create new Repo on Git \n\n -text = cmd command",
          },
          {
            title: "git add",
            text: "go to root\n\n-git init\n-git add .\n-git commit -m \"Initial commit\"\n\nIf it needs name/email\n-git config --global user.name \"Your Name\"\n-git config --global user.email \"you@email.se\"\n",
          },
          {
            title: "Git URL",
            text: "Take git URL\n-git remote add origin URL\n\nUploading project\nRenaming branch if other\n-git branch -M main\nUpload Main branch to Origin\n-git push -u origin main\n\nStatus\n-git status\n\nClone 2  new client\n-cd Workspace\n-git clone URL\n-cd projekt\n-git remote -v",
          },
          
        ]}
      />

    </main>
  );
}