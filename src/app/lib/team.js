export async function getTeamData() {
  const teamData = await import(`../content/team/team.yml`);

  // Inject image imports
  const members = await Promise.all(
    teamData.members.map(async (m) => {
      const { default: image } = await import(
        `../content/team/photos/${m.id}.jpg`
      );
      return { ...m, image };
    })
  );

  return { ...teamData, members };
}
