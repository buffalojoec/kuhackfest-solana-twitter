import { AnchorWallet } from "@solana/wallet-adapter-react";
import * as anchor from "@project-serum/anchor";
import * as constants from './const';
import { ProfileObject, TweetObject } from '../models/types';


function getAnchorConfigs(wallet: AnchorWallet): [anchor.AnchorProvider, anchor.Program] | [null, null] {
    if (!wallet) {
        return [null, null];
    }
    const provider = new anchor.AnchorProvider(
        new anchor.web3.Connection(constants.NETWORK, constants.PREFLIGHT_COMMITMENT), 
        wallet, 
        { "preflightCommitment": constants.PREFLIGHT_COMMITMENT }
    );
    const idl = require("../utils/idl.json");
    const program = new anchor.Program(idl, idl.metadata.address, provider);
    return [provider, program];
}

async function getPda(provider: anchor.AnchorProvider, program: anchor.Program, seeds: string[]) {
    let pdaSeeds = [provider.wallet.publicKey.toBuffer()];
    for (var s of seeds) pdaSeeds.push(Buffer.from(s));
    return await anchor.web3.PublicKey.findProgramAddress(
        pdaSeeds,
        program.programId,
    );
}

export async function createProfileTransaction(
    wallet: AnchorWallet,
    handle: string,
    displayName: string,
): Promise<[anchor.web3.Transaction, anchor.AnchorProvider]> {
    
    // TODO: Create Twitter Profile
};

export async function modifyProfileTransaction(
    wallet: AnchorWallet,
    handle: string,
    displayName: string,
): Promise<[anchor.web3.Transaction, anchor.AnchorProvider]> {
    
    // TODO: Modify Twitter Profile
};

export async function getProfile(wallet: AnchorWallet): Promise<ProfileObject> {
    
    // TODO: Fetch Twitter Profile
};

export async function createTweetTransaction(
    wallet: AnchorWallet,
    message: string,
): Promise<[anchor.web3.Transaction, anchor.AnchorProvider]> {
    
    // TODO: Create Tweet
};

export async function getAllTweets(wallet: AnchorWallet): Promise<TweetObject[]> {
    
    // TODO: Get All Tweets
};