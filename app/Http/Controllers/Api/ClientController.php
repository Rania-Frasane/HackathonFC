<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Client;


use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function index()
    {
        $clients = Client::all();
        return response()->json($clients);
    }
    public function store(Request $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validate([
            'Nom' => 'required',
            'Prenom' => 'required',
            'Email' => 'required|email',
            'Telephone' => 'required',
        ]);

        // Créer un nouveau client avec les données validées
        $client = Client::create($validatedData);

        // Retourner une réponse JSON avec le client créé et le code de statut 201 (créé avec succès)
        return response()->json($client, 201);
    }

    public function update(Request $request, Client $client)
    {
        $request->validate([
            'Nom' => 'required|string',
            'Prenom' => 'required|string',
            'Email' => 'required|email',
            'Telephone' => 'required|string'
        ]);

        $client->update($request->all());

        return response()->json($client, 200);
    }

    /**
     * Supprime le client spécifié.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        $client->delete();

        return response()->json(null, 204);
    }

}
