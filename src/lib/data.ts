import { Team } from './types';

export const TEAMS: Team[] = [
    {
        id: 'man-city',
        name: 'Manchester City',
        shortName: 'MCI',
        logo: '🔵',
        stats: {
            matchesPlayed: 10,
            wins: 8,
            draws: 2,
            losses: 0,
            goalsScored: 27, // High scoring
            goalsConceded: 8,
            formPoints: 13, // W W D W W
        },
        attackStrength: 95, // Best attack
        defenseStrength: 88,
        homeAdvantage: 10,
        players: [
            { id: 'mci_haaland', name: 'Erling Haaland', position: 'FW', rating: 10, stats: { goals: 22, assists: 0, matchesPlayed: 20, lastMatchRating: 8.5 } },
            { id: 'mci_kdb', name: 'Kevin De Bruyne', position: 'MF', rating: 10, stats: { goals: 4, assists: 7, matchesPlayed: 15, lastMatchRating: 7.5 } },
            { id: 'mci_foden', name: 'Phil Foden', position: 'MF', rating: 9, stats: { goals: 7, assists: 2, matchesPlayed: 18, lastMatchRating: 8.0, yellowCards: 1 } },
            { id: 'mci_rodri', name: 'Rodri', position: 'MF', rating: 10, stats: { goals: 3, assists: 2, matchesPlayed: 19, lastMatchRating: 8.8, isInjured: true } }, // Injured
            { id: 'mci_bernardo', name: 'Bernardo Silva', position: 'MF', rating: 9, stats: { goals: 2, assists: 4, matchesPlayed: 18, lastMatchRating: 7.5, yellowCards: 3 } },
            { id: 'mci_dias', name: 'Rúben Dias', position: 'DF', rating: 9, stats: { goals: 1, assists: 0, matchesPlayed: 18, lastMatchRating: 7.2 } },
            { id: 'mci_gvardiol', name: 'Joško Gvardiol', position: 'DF', rating: 8, stats: { goals: 2, assists: 1, matchesPlayed: 17, lastMatchRating: 7.0 } },
            { id: 'mci_ederson', name: 'Ederson', position: 'GK', rating: 9, stats: { goals: 0, assists: 1, matchesPlayed: 18, lastMatchRating: 7.0 } },
            { id: 'mci_savinio', name: 'Savinho', position: 'FW', rating: 8, stats: { goals: 1, assists: 8, matchesPlayed: 15, lastMatchRating: 7.5 } },
            { id: 'mci_doku', name: 'Jérémy Doku', position: 'FW', rating: 8, stats: { goals: 3, assists: 6, matchesPlayed: 14, lastMatchRating: 6.8 } },
            { id: 'mci_walker', name: 'Kyle Walker', position: 'DF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 12, lastMatchRating: 6.5 } },
        ]
    },
    {
        id: 'arsenal',
        name: 'Arsenal',
        shortName: 'ARS',
        logo: '🔴',
        stats: {
            matchesPlayed: 10,
            wins: 7,
            draws: 2,
            losses: 1,
            goalsScored: 20,
            goalsConceded: 9,
            formPoints: 11,
        },
        attackStrength: 88,
        defenseStrength: 92, // Best defense
        homeAdvantage: 9,
        players: [
            { id: 'ars_saka', name: 'Bukayo Saka', position: 'FW', rating: 10, stats: { goals: 8, assists: 10, matchesPlayed: 20, lastMatchRating: 8.2 } },
            { id: 'ars_odegaard', name: 'Martin Ødegaard', position: 'MF', rating: 9, stats: { goals: 3, assists: 8, matchesPlayed: 18, lastMatchRating: 7.8 } },
            { id: 'ars_rice', name: 'Declan Rice', position: 'MF', rating: 9, stats: { goals: 4, assists: 7, matchesPlayed: 20, lastMatchRating: 8.0 } },
            { id: 'ars_saliba', name: 'William Saliba', position: 'DF', rating: 9, stats: { goals: 2, assists: 0, matchesPlayed: 20, lastMatchRating: 7.5 } },
            { id: 'ars_gabriel', name: 'Gabriel Magalhães', position: 'DF', rating: 8, stats: { goals: 3, assists: 0, matchesPlayed: 20, lastMatchRating: 7.4 } },
            { id: 'ars_havertz', name: 'Kai Havertz', position: 'FW', rating: 8, stats: { goals: 9, assists: 3, matchesPlayed: 20, lastMatchRating: 7.2 } },
            { id: 'ars_martinelli', name: 'Gabriel Martinelli', position: 'FW', rating: 8, stats: { goals: 8, assists: 4, matchesPlayed: 19, lastMatchRating: 7.0 } },
            { id: 'ars_raya', name: 'David Raya', position: 'GK', rating: 9, stats: { goals: 0, assists: 0, matchesPlayed: 20, lastMatchRating: 7.5 } },
            { id: 'ars_party', name: 'Thomas Partey', position: 'MF', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 15, lastMatchRating: 6.8 } },
            { id: 'ars_white', name: 'Ben White', position: 'DF', rating: 8, stats: { goals: 0, assists: 2, matchesPlayed: 18, lastMatchRating: 7.0 } },
            { id: 'ars_trossard', name: 'Leandro Trossard', position: 'FW', rating: 8, stats: { goals: 8, assists: 7, matchesPlayed: 18, lastMatchRating: 7.5 } },
        ]
    },
    {
        id: 'liverpool',
        name: 'Liverpool',
        shortName: 'LIV',
        logo: '🔴🦅',
        stats: {
            matchesPlayed: 10,
            wins: 7,
            draws: 1,
            losses: 2,
            goalsScored: 24,
            goalsConceded: 11,
            formPoints: 10,
        },
        attackStrength: 90,
        defenseStrength: 85,
        homeAdvantage: 12, // Anfield
        players: [
            { id: 'liv_salah', name: 'Mohamed Salah', position: 'FW', rating: 10, stats: { goals: 29, assists: 18, matchesPlayed: 25, lastMatchRating: 8.5 } },
            { id: 'liv_vvd', name: 'Virgil van Dijk', position: 'DF', rating: 9, stats: { goals: 3, assists: 1, matchesPlayed: 22, lastMatchRating: 7.8 } },
            { id: 'liv_trent', name: 'T. Alexander-Arnold', position: 'DF', rating: 9, stats: { goals: 3, assists: 6, matchesPlayed: 20, lastMatchRating: 7.5 } },
            { id: 'liv_alisson', name: 'Alisson Becker', position: 'GK', rating: 9, stats: { goals: 0, assists: 1, matchesPlayed: 20, lastMatchRating: 7.2 } },
            { id: 'liv_mac', name: 'Alexis Mac Allister', position: 'MF', rating: 8, stats: { goals: 5, assists: 5, matchesPlayed: 21, lastMatchRating: 7.0 } },
            { id: 'liv_szobo', name: 'D. Szoboszlai', position: 'MF', rating: 8, stats: { goals: 6, assists: 6, matchesPlayed: 20, lastMatchRating: 6.8 } },
            { id: 'liv_diaz', name: 'Luis Díaz', position: 'FW', rating: 8, stats: { goals: 13, assists: 5, matchesPlayed: 21, lastMatchRating: 7.2 } },
            { id: 'liv_jota', name: 'Diogo Jota', position: 'FW', rating: 8, stats: { goals: 6, assists: 3, matchesPlayed: 15, lastMatchRating: 6.5 } },
            { id: 'liv_robbo', name: 'Andy Robertson', position: 'DF', rating: 8, stats: { goals: 1, assists: 4, matchesPlayed: 18, lastMatchRating: 6.5 } },
            { id: 'liv_gakpo', name: 'Cody Gakpo', position: 'FW', rating: 8, stats: { goals: 10, assists: 4, matchesPlayed: 20, lastMatchRating: 7.0 } },
            { id: 'liv_konate', name: 'Ibrahima Konaté', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 16, lastMatchRating: 7.0 } },
        ]
    },
    {
        id: 'chelsea',
        name: 'Chelsea',
        shortName: 'CHE',
        logo: '🔵🦁',
        stats: {
            matchesPlayed: 10,
            wins: 5,
            draws: 2,
            losses: 3,
            goalsScored: 18,
            goalsConceded: 14,
            formPoints: 8,
        },
        attackStrength: 85,
        defenseStrength: 80,
        homeAdvantage: 6,
        players: [
            { id: 'che_palmer', name: 'Cole Palmer', position: 'MF', rating: 9, stats: { goals: 15, assists: 8, matchesPlayed: 20, lastMatchRating: 8.8 } },
            { id: 'che_enzo', name: 'Enzo Fernández', position: 'MF', rating: 8, stats: { goals: 6, assists: 7, matchesPlayed: 19, lastMatchRating: 7.5 } },
            { id: 'che_caicedo', name: 'Moisés Caicedo', position: 'MF', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 20, lastMatchRating: 7.2 } },
            { id: 'che_james', name: 'Reece James', position: 'DF', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 10, lastMatchRating: 6.5, isInjured: true, redCards: 1 } }, // Injured + Suspended
            { id: 'che_jackson', name: 'Nicolas Jackson', position: 'FW', rating: 8, stats: { goals: 10, assists: 5, matchesPlayed: 20, lastMatchRating: 7.8 } },
            { id: 'che_nkunku', name: 'Christopher Nkunku', position: 'FW', rating: 8, stats: { goals: 3, assists: 2, matchesPlayed: 15, lastMatchRating: 6.8 } },
            { id: 'che_colwill', name: 'Levi Colwill', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 18, lastMatchRating: 6.5 } },
            { id: 'che_sanchez', name: 'Robert Sánchez', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 18, lastMatchRating: 6.0 } },
            { id: 'che_madueke', name: 'Noni Madueke', position: 'FW', rating: 7, stats: { goals: 7, assists: 3, matchesPlayed: 17, lastMatchRating: 7.2 } },
            { id: 'che_cucurella', name: 'Marc Cucurella', position: 'DF', rating: 7, stats: { goals: 5, assists: 1, matchesPlayed: 18, lastMatchRating: 6.8 } },
            { id: 'che_neto', name: 'Pedro Neto', position: 'FW', rating: 8, stats: { goals: 4, assists: 6, matchesPlayed: 16, lastMatchRating: 7.0 } },
        ]
    },
    // --- ADDITIONAL TOP TEAMS ---
    {
        id: 'man-utd', name: 'Manchester United', shortName: 'MUN', logo: '👹',
        stats: { matchesPlayed: 10, wins: 5, draws: 2, losses: 3, goalsScored: 15, goalsConceded: 12, formPoints: 9 },
        attackStrength: 82, defenseStrength: 78, homeAdvantage: 8,
        players: [
            { id: 'mun_onana', name: 'André Onana', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'mun_dalot', name: 'Diogo Dalot', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'mun_martinez', name: 'Lisandro Martínez', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'mun_deligt', name: 'Matthijs de Ligt', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'mun_mazraoui', name: 'Noussair Mazraoui', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'mun_casemiro', name: 'Casemiro', position: 'MF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 8, lastMatchRating: 6.2 } },
            { id: 'mun_mainoo', name: 'Kobbie Mainoo', position: 'MF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 7.5, isInjured: true } },
            { id: 'mun_bruno', name: 'Bruno Fernandes', position: 'MF', rating: 9, stats: { goals: 2, assists: 3, matchesPlayed: 10, lastMatchRating: 7.8, yellowCards: 2 } },
            { id: 'mun_garnacho', name: 'A. Garnacho', position: 'FW', rating: 8, stats: { goals: 5, assists: 1, matchesPlayed: 10, lastMatchRating: 8.0 } },
            { id: 'mun_rashford', name: 'Marcus Rashford', position: 'FW', rating: 8, stats: { goals: 4, assists: 1, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'mun_hojlund', name: 'Rasmus Højlund', position: 'FW', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 6, lastMatchRating: 6.8 } }
        ]
    },
    {
        id: 'tottenham', name: 'Tottenham Hotspur', shortName: 'TOT', logo: '🐓',
        stats: { matchesPlayed: 10, wins: 6, draws: 1, losses: 3, goalsScored: 22, goalsConceded: 15, formPoints: 10 },
        attackStrength: 86, defenseStrength: 76, homeAdvantage: 7,
        players: [
            { id: 'tot_vicario', name: 'G. Vicario', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'tot_porro', name: 'Pedro Porro', position: 'DF', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'tot_romero', name: 'Cristian Romero', position: 'DF', rating: 9, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 7.8, yellowCards: 2 } },
            { id: 'tot_vdven', name: 'Micky van de Ven', position: 'DF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 8.0, isInjured: true } },
            { id: 'tot_udogie', name: 'Destiny Udogie', position: 'DF', rating: 8, stats: { goals: 0, assists: 2, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'tot_bissouma', name: 'Yves Bissouma', position: 'MF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 8, lastMatchRating: 7.2 } },
            { id: 'tot_maddison', name: 'James Maddison', position: 'MF', rating: 9, stats: { goals: 3, assists: 4, matchesPlayed: 9, lastMatchRating: 7.5 } },
            { id: 'tot_kulusevski', name: 'Dejan Kulusevski', position: 'MF', rating: 8, stats: { goals: 2, assists: 2, matchesPlayed: 10, lastMatchRating: 8.5 } },
            { id: 'tot_johnson', name: 'Brennan Johnson', position: 'FW', rating: 8, stats: { goals: 6, assists: 0, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'tot_son', name: 'Heung-min Son', position: 'FW', rating: 9, stats: { goals: 4, assists: 3, matchesPlayed: 8, lastMatchRating: 8.0 } },
            { id: 'tot_solanke', name: 'Dominic Solanke', position: 'FW', rating: 8, stats: { goals: 4, assists: 1, matchesPlayed: 9, lastMatchRating: 7.5 } }
        ]
    },
    {
        id: 'aston-villa', name: 'Aston Villa', shortName: 'AVL', logo: '🦁',
        stats: { matchesPlayed: 10, wins: 6, draws: 2, losses: 2, goalsScored: 18, goalsConceded: 12, formPoints: 11 },
        attackStrength: 84, defenseStrength: 80, homeAdvantage: 9,
        players: [
            { id: 'avl_martinez', name: 'Emi Martínez', position: 'GK', rating: 9, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 8.5 } },
            { id: 'avl_cash', name: 'Matty Cash', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 5, lastMatchRating: 6.5 } },
            { id: 'avl_konsa', name: 'Ezri Konsa', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'avl_pau', name: 'Pau Torres', position: 'DF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'avl_digne', name: 'Lucas Digne', position: 'DF', rating: 7, stats: { goals: 0, assists: 2, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'avl_tielemans', name: 'Youri Tielemans', position: 'MF', rating: 8, stats: { goals: 1, assists: 3, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'avl_onana', name: 'Amadou Onana', position: 'MF', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 9, lastMatchRating: 7.5 } },
            { id: 'avl_mcginn', name: 'John McGinn', position: 'MF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 7.0 } },
            { id: 'avl_rogers', name: 'Morgan Rogers', position: 'FW', rating: 8, stats: { goals: 3, assists: 2, matchesPlayed: 10, lastMatchRating: 8.2 } },
            { id: 'avl_bailey', name: 'Leon Bailey', position: 'FW', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'avl_watkins', name: 'Ollie Watkins', position: 'FW', rating: 9, stats: { goals: 5, assists: 2, matchesPlayed: 10, lastMatchRating: 7.8 } }
        ]
    },
    {
        id: 'newcastle', name: 'Newcastle United', shortName: 'NEW', logo: '⚫⚪',
        stats: { matchesPlayed: 10, wins: 5, draws: 3, losses: 2, goalsScored: 17, goalsConceded: 11, formPoints: 9 },
        attackStrength: 83, defenseStrength: 82, homeAdvantage: 10,
        players: [
            { id: 'new_pope', name: 'Nick Pope', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'new_livramento', name: 'T. Livramento', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.8 } },
            { id: 'new_schar', name: 'Fabian Schär', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'new_burn', name: 'Dan Burn', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'new_hall', name: 'Lewis Hall', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 7.5 } },
            { id: 'new_guimaraes', name: 'Bruno Guimarães', position: 'MF', rating: 9, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 8.0, yellowCards: 3 } },
            { id: 'new_joelinton', name: 'Joelinton', position: 'MF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.5 } },
            { id: 'new_tonali', name: 'Sandro Tonali', position: 'MF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 6.8 } },
            { id: 'new_gordon', name: 'Anthony Gordon', position: 'FW', rating: 8, stats: { goals: 2, assists: 1, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'new_barnes', name: 'Harvey Barnes', position: 'FW', rating: 8, stats: { goals: 3, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'new_isak', name: 'Alexander Isak', position: 'FW', rating: 9, stats: { goals: 3, assists: 1, matchesPlayed: 8, lastMatchRating: 7.5 } }
        ]
    },
    // --- MID TABLE ---
    {
        id: 'brighton', name: 'Brighton', shortName: 'BHA', logo: '🔵⚪',
        stats: { matchesPlayed: 10, wins: 4, draws: 4, losses: 2, goalsScored: 16, goalsConceded: 14, formPoints: 8 },
        attackStrength: 79, defenseStrength: 75, homeAdvantage: 6,
        players: [
            { id: 'bha_verbruggen', name: 'Bart Verbruggen', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'bha_veltman', name: 'Joël Veltman', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'bha_dunk', name: 'Lewis Dunk', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'bha_vanhecke', name: 'JP van Hecke', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'bha_estupinan', name: 'Pervis Estupiñán', position: 'DF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 6, lastMatchRating: 6.8 } },
            { id: 'bha_baleba', name: 'Carlos Baleba', position: 'MF', rating: 8, stats: { goals: 1, assists: 1, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'bha_hinshelwood', name: 'Jack Hinshelwood', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'bha_minteh', name: 'Yankuba Minteh', position: 'FW', rating: 7, stats: { goals: 1, assists: 2, matchesPlayed: 8, lastMatchRating: 7.0 } },
            { id: 'bha_rutter', name: 'Georginio Rutter', position: 'FW', rating: 7, stats: { goals: 2, assists: 1, matchesPlayed: 8, lastMatchRating: 7.2 } },
            { id: 'bha_mitoma', name: 'Kaoru Mitoma', position: 'FW', rating: 8, stats: { goals: 1, assists: 2, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'bha_welbeck', name: 'Danny Welbeck', position: 'FW', rating: 8, stats: { goals: 6, assists: 1, matchesPlayed: 10, lastMatchRating: 8.0 } }
        ]
    },
    {
        id: 'west-ham', name: 'West Ham', shortName: 'WHU', logo: '⚒️',
        stats: { matchesPlayed: 10, wins: 4, draws: 2, losses: 4, goalsScored: 14, goalsConceded: 16, formPoints: 7 },
        attackStrength: 78, defenseStrength: 76, homeAdvantage: 7,
        players: [
            { id: 'whu_areola', name: 'A. Areola', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'whu_awb', name: 'Wan-Bissaka', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 7.2 } },
            { id: 'whu_kilman', name: 'Max Kilman', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'whu_todibo', name: 'J-C. Todibo', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 6, lastMatchRating: 6.8 } },
            { id: 'whu_emerson', name: 'Emerson', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.5 } },
            { id: 'whu_rodriguez', name: 'Guido Rodríguez', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'whu_soucek', name: 'Tomas Soucek', position: 'MF', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'whu_paqueta', name: 'Lucas Paquetá', position: 'MF', rating: 9, stats: { goals: 2, assists: 1, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'whu_bowen', name: 'Jarrod Bowen', position: 'FW', rating: 9, stats: { goals: 3, assists: 2, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'whu_kudus', name: 'Mohammed Kudus', position: 'FW', rating: 9, stats: { goals: 2, assists: 0, matchesPlayed: 8, lastMatchRating: 7.0, redCards: 1 } },
            { id: 'whu_antonio', name: 'Michail Antonio', position: 'FW', rating: 7, stats: { goals: 1, assists: 1, matchesPlayed: 9, lastMatchRating: 6.2 } }
        ]
    },
    {
        id: 'brentford', name: 'Brentford', shortName: 'BRE', logo: '🐝',
        stats: { matchesPlayed: 10, wins: 3, draws: 3, losses: 4, goalsScored: 15, goalsConceded: 18, formPoints: 6 },
        attackStrength: 76, defenseStrength: 72, homeAdvantage: 6,
        players: [
            { id: 'bre_flekken', name: 'Mark Flekken', position: 'GK', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'bre_roerslev', name: 'Mads Roerslev', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'bre_pinnock', name: 'Ethan Pinnock', position: 'DF', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'bre_collins', name: 'Nathan Collins', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'bre_norgaard', name: 'C. Nørgaard', position: 'MF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 7.0 } },
            { id: 'bre_janelt', name: 'Vitaly Janelt', position: 'MF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'bre_jensen', name: 'Mathias Jensen', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 6, lastMatchRating: 6.5 } },
            { id: 'bre_damsgaard', name: 'Mikkel Damsgaard', position: 'MF', rating: 8, stats: { goals: 0, assists: 3, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'bre_lewis', name: 'K-Lewis Potter', position: 'FW', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'bre_mbeumo', name: 'Bryan Mbeumo', position: 'FW', rating: 9, stats: { goals: 8, assists: 0, matchesPlayed: 10, lastMatchRating: 8.5 } },
            { id: 'bre_wissa', name: 'Yoane Wissa', position: 'FW', rating: 8, stats: { goals: 5, assists: 1, matchesPlayed: 7, lastMatchRating: 8.0 } }
        ]
    },
    {
        id: 'palace', name: 'Crystal Palace', shortName: 'CRY', logo: '🦅',
        stats: { matchesPlayed: 10, wins: 2, draws: 4, losses: 4, goalsScored: 10, goalsConceded: 15, formPoints: 5 },
        attackStrength: 74, defenseStrength: 75, homeAdvantage: 6,
        players: [
            { id: 'cry_henderson', name: 'Dean Henderson', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'cry_munoz', name: 'Daniel Muñoz', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'cry_chalobah', name: 'T. Chalobah', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 4, lastMatchRating: 7.5 } },
            { id: 'cry_guehi', name: 'Marc Guéhi', position: 'DF', rating: 8, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'cry_lacroix', name: 'Maxence Lacroix', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 9, lastMatchRating: 6.5 } },
            { id: 'cry_mitchell', name: 'Tyrick Mitchell', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'cry_wharton', name: 'Adam Wharton', position: 'MF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 7.0, isInjured: true } },
            { id: 'cry_kamada', name: 'Daichi Kamada', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.2, redCards: 1 } },
            { id: 'cry_eze', name: 'Eberechi Eze', position: 'MF', rating: 9, stats: { goals: 1, assists: 1, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'cry_sarr', name: 'Ismaïla Sarr', position: 'FW', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'cry_mateta', name: 'J-P. Mateta', position: 'FW', rating: 8, stats: { goals: 3, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } }
        ]
    },
    {
        id: 'fulham', name: 'Fulham', shortName: 'FUL', logo: '⚪⚫',
        stats: { matchesPlayed: 10, wins: 3, draws: 3, losses: 4, goalsScored: 12, goalsConceded: 14, formPoints: 6 },
        attackStrength: 75, defenseStrength: 74, homeAdvantage: 6,
        players: [
            { id: 'ful_leno', name: 'Bernd Leno', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'ful_tete', name: 'Kenny Tete', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'ful_bassey', name: 'Calvin Bassey', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'ful_andersen', name: 'Joachim Andersen', position: 'DF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 7.2 } },
            { id: 'ful_robinson', name: 'Antonee Robinson', position: 'DF', rating: 8, stats: { goals: 0, assists: 3, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'ful_pereira', name: 'Andreas Pereira', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'ful_berge', name: 'Sander Berge', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 6.8 } },
            { id: 'ful_iwobi', name: 'Alex Iwobi', position: 'MF', rating: 7, stats: { goals: 2, assists: 1, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'ful_smithrowe', name: 'Emile Smith Rowe', position: 'MF', rating: 8, stats: { goals: 2, assists: 2, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'ful_traore', name: 'Adama Traoré', position: 'FW', rating: 7, stats: { goals: 1, assists: 2, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'ful_jimenez', name: 'Raúl Jiménez', position: 'FW', rating: 8, stats: { goals: 4, assists: 1, matchesPlayed: 10, lastMatchRating: 7.8 } }
        ]
    },
    {
        id: 'bournemouth', name: 'Bournemouth', shortName: 'BOU', logo: '🍒',
        stats: { matchesPlayed: 10, wins: 3, draws: 2, losses: 5, goalsScored: 11, goalsConceded: 17, formPoints: 5 },
        attackStrength: 74, defenseStrength: 73, homeAdvantage: 5,
        players: [
            { id: 'bou_kepa', name: 'Kepa', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 6, lastMatchRating: 6.5 } },
            { id: 'bou_araujo', name: 'Julián Araujo', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.0 } },
            { id: 'bou_zabarnyi', name: 'Illia Zabarnyi', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'bou_senesi', name: 'Marcos Senesi', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'bou_kerkez', name: 'Milos Kerkez', position: 'DF', rating: 8, stats: { goals: 0, assists: 2, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'bou_cook', name: 'Lewis Cook', position: 'MF', rating: 7, stats: { goals: 1, assists: 2, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'bou_christie', name: 'Ryan Christie', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'bou_kluivert', name: 'Justin Kluivert', position: 'MF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 9, lastMatchRating: 6.5 } },
            { id: 'bou_semenyo', name: 'Antoine Semenyo', position: 'FW', rating: 8, stats: { goals: 3, assists: 1, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'bou_tavernier', name: 'Marcus Tavernier', position: 'FW', rating: 7, stats: { goals: 1, assists: 1, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'bou_evanilson', name: 'Evanilson', position: 'FW', rating: 7, stats: { goals: 2, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } }
        ]
    },
    {
        id: 'nottm-forest', name: 'Nottingham Forest', shortName: 'NFO', logo: '🌳',
        stats: { matchesPlayed: 10, wins: 2, draws: 4, losses: 4, goalsScored: 10, goalsConceded: 13, formPoints: 5 },
        attackStrength: 73, defenseStrength: 74, homeAdvantage: 7,
        players: [
            { id: 'nfo_sels', name: 'Matz Sels', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'nfo_aina', name: 'Ola Aina', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'nfo_milenkovic', name: 'N. Milenković', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 7.5 } },
            { id: 'nfo_murillo', name: 'Murillo', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'nfo_moreno', name: 'Álex Moreno', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 6.8 } },
            { id: 'nfo_yates', name: 'Ryan Yates', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'nfo_wardprowse', name: 'J. Ward-Prowse', position: 'MF', rating: 8, stats: { goals: 0, assists: 1, matchesPlayed: 6, lastMatchRating: 6.8, redCards: 1 } },
            { id: 'nfo_mgw', name: 'M. Gibbs-White', position: 'MF', rating: 9, stats: { goals: 1, assists: 0, matchesPlayed: 7, lastMatchRating: 7.5, isInjured: true } },
            { id: 'nfo_elanga', name: 'Anthony Elanga', position: 'FW', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'nfo_hudson', name: 'C. Hudson-Odoi', position: 'FW', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'nfo_wood', name: 'Chris Wood', position: 'FW', rating: 8, stats: { goals: 7, assists: 0, matchesPlayed: 10, lastMatchRating: 8.2 } }
        ]
    },
    {
        id: 'wolves', name: 'Wolverhampton', shortName: 'WOL', logo: '🐺',
        stats: { matchesPlayed: 10, wins: 1, draws: 2, losses: 7, goalsScored: 9, goalsConceded: 20, formPoints: 3 },
        attackStrength: 72, defenseStrength: 68, homeAdvantage: 5,
        players: [
            { id: 'wol_johnstone', name: 'Sam Johnstone', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 6.2 } },
            { id: 'wol_semedo', name: 'Nélson Semedo', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.0 } },
            { id: 'wol_dawson', name: 'Craig Dawson', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'wol_toti', name: 'Toti Gomes', position: 'DF', rating: 6, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 5.8 } },
            { id: 'wol_aitnouri', name: 'Rayan Aït-Nouri', position: 'DF', rating: 8, stats: { goals: 3, assists: 2, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'wol_andre', name: 'André', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'wol_lemiba', name: 'Mario Lemina', position: 'MF', rating: 7, stats: { goals: 1, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'wol_gomes', name: 'João Gomes', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'wol_cunha', name: 'Matheus Cunha', position: 'FW', rating: 9, stats: { goals: 4, assists: 0, matchesPlayed: 10, lastMatchRating: 8.0 } },
            { id: 'wol_bellegarde', name: 'J-R. Bellegarde', position: 'FW', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 7, lastMatchRating: 6.2 } },
            { id: 'wol_larsen', name: 'Jørgen S. Larsen', position: 'FW', rating: 7, stats: { goals: 4, assists: 1, matchesPlayed: 10, lastMatchRating: 7.2 } }
        ]
    },
    {
        id: 'everton', name: 'Everton', shortName: 'EVE', logo: '🍬',
        stats: { matchesPlayed: 10, wins: 2, draws: 3, losses: 5, goalsScored: 10, goalsConceded: 16, formPoints: 5 },
        attackStrength: 71, defenseStrength: 75, homeAdvantage: 6,
        players: [
            { id: 'eve_pickford', name: 'Jordan Pickford', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'eve_young', name: 'Ashley Young', position: 'DF', rating: 6, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.0 } },
            { id: 'eve_tarkowski', name: 'James Tarkowski', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'eve_branthwaite', name: 'J. Branthwaite', position: 'DF', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 3, lastMatchRating: 7.0, isInjured: true } },
            { id: 'eve_mykolenko', name: 'Vitaliy Mykolenko', position: 'DF', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'eve_gueye', name: 'Idrissa Gueye', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'eve_doucoure', name: 'A. Doucouré', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.2 } },
            { id: 'eve_harrison', name: 'Jack Harrison', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.0 } },
            { id: 'eve_mcneil', name: 'Dwight McNeil', position: 'MF', rating: 8, stats: { goals: 3, assists: 3, matchesPlayed: 10, lastMatchRating: 7.8 } },
            { id: 'eve_ndiaye', name: 'Iliman Ndiaye', position: 'FW', rating: 8, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'eve_dcl', name: 'D. Calvert-Lewin', position: 'FW', rating: 7, stats: { goals: 2, assists: 1, matchesPlayed: 10, lastMatchRating: 6.5 } }
        ]
    },
    // --- PROMOTED / STRUGGLING ---
    {
        id: 'leicester', name: 'Leicester City', shortName: 'LEI', logo: '🦊',
        stats: { matchesPlayed: 10, wins: 2, draws: 2, losses: 6, goalsScored: 12, goalsConceded: 20, formPoints: 4 },
        attackStrength: 74, defenseStrength: 68, homeAdvantage: 6,
        players: [
            { id: 'lei_hermansen', name: 'Mads Hermansen', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 7.5 } },
            { id: 'lei_justin', name: 'James Justin', position: 'DF', rating: 7, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'lei_faes', name: 'Wout Faes', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'lei_okoli', name: 'Caleb Okoli', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'lei_kristiansen', name: 'Victor Kristiansen', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.5 } },
            { id: 'lei_ndidi', name: 'Wilfred Ndidi', position: 'MF', rating: 7, stats: { goals: 0, assists: 4, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'lei_winks', name: 'Harry Winks', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'lei_buonanotte', name: 'F. Buonanotte', position: 'MF', rating: 8, stats: { goals: 3, assists: 2, matchesPlayed: 8, lastMatchRating: 7.5 } },
            { id: 'lei_fatawu', name: 'Abdul Fatawu', position: 'FW', rating: 7, stats: { goals: 0, assists: 2, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'lei_mavididi', name: 'Stephy Mavididi', position: 'FW', rating: 7, stats: { goals: 2, assists: 0, matchesPlayed: 9, lastMatchRating: 7.0 } },
            { id: 'lei_vardy', name: 'Jamie Vardy', position: 'FW', rating: 7, stats: { goals: 4, assists: 1, matchesPlayed: 10, lastMatchRating: 7.8 } }
        ]
    },
    {
        id: 'ipswich', name: 'Ipswich Town', shortName: 'IPS', logo: '🚜',
        stats: { matchesPlayed: 10, wins: 1, draws: 4, losses: 5, goalsScored: 10, goalsConceded: 18, formPoints: 4 },
        attackStrength: 70, defenseStrength: 68, homeAdvantage: 7, // Portman Road
        players: [
            { id: 'ips_muric', name: 'Arijanet Muric', position: 'GK', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 7.0 } },
            { id: 'ips_tuanzebe', name: 'Axel Tuanzebe', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 6, lastMatchRating: 6.8 } },
            { id: 'ips_oshea', name: 'Dara O\'Shea', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'ips_greaves', name: 'Jacob Greaves', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'ips_davis', name: 'Leif Davis', position: 'DF', rating: 7, stats: { goals: 0, assists: 2, matchesPlayed: 10, lastMatchRating: 7.2 } },
            { id: 'ips_morsy', name: 'Sam Morsy', position: 'MF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'ips_phillips', name: 'Kalvin Phillips', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 7, lastMatchRating: 6.2 } },
            { id: 'ips_szmodics', name: 'Sammie Szmodics', position: 'MF', rating: 7, stats: { goals: 2, assists: 0, matchesPlayed: 9, lastMatchRating: 6.8 } },
            { id: 'ips_omari', name: 'Omari Hutchinson', position: 'FW', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'ips_clarke', name: 'Jack Clarke', position: 'FW', rating: 7, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.5 } },
            { id: 'ips_delap', name: 'Liam Delap', position: 'FW', rating: 8, stats: { goals: 5, assists: 1, matchesPlayed: 10, lastMatchRating: 8.0 } }
        ]
    },
    {
        id: 'southampton', name: 'Southampton', shortName: 'SOU', logo: '😇',
        stats: { matchesPlayed: 10, wins: 0, draws: 2, losses: 8, goalsScored: 6, goalsConceded: 22, formPoints: 1 },
        attackStrength: 68, defenseStrength: 65, homeAdvantage: 5,
        players: [
            { id: 'sou_ramsdale', name: 'Aaron Ramsdale', position: 'GK', rating: 8, stats: { goals: 0, assists: 0, matchesPlayed: 8, lastMatchRating: 7.5 } },
            { id: 'sou_sugawara', name: 'Yukinari Sugawara', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 7.0 } },
            { id: 'sou_harwood', name: 'T. Harwood-Bellis', position: 'DF', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 10, lastMatchRating: 6.5 } },
            { id: 'sou_bednarek', name: 'Jan Bednarek', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.2 } },
            { id: 'sou_kbp', name: 'Kyle Walker-Peters', position: 'DF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 9, lastMatchRating: 6.5 } },
            { id: 'sou_downes', name: 'Flynn Downes', position: 'MF', rating: 7, stats: { goals: 0, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'sou_lallana', name: 'Adam Lallana', position: 'MF', rating: 7, stats: { goals: 0, assists: 2, matchesPlayed: 7, lastMatchRating: 7.0 } },
            { id: 'sou_fernandes', name: 'Mateus Fernandes', position: 'MF', rating: 6, stats: { goals: 0, assists: 1, matchesPlayed: 9, lastMatchRating: 6.0 } },
            { id: 'sou_dibling', name: 'Tyler Dibling', position: 'FW', rating: 7, stats: { goals: 1, assists: 0, matchesPlayed: 9, lastMatchRating: 7.2 } },
            { id: 'sou_archer', name: 'Cameron Archer', position: 'FW', rating: 7, stats: { goals: 2, assists: 0, matchesPlayed: 10, lastMatchRating: 6.8 } },
            { id: 'sou_armstrong', name: 'Adam Armstrong', position: 'FW', rating: 6, stats: { goals: 0, assists: 1, matchesPlayed: 8, lastMatchRating: 6.0 } }
        ]
    }
];

export function getTeamById(id: string): Team | undefined {
    return TEAMS.find(t => t.id === id);
}
