<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $users = App\User::all();
        foreach($users as $user) {
            DB::table('orders')->insert([
                'user_id' => $user->id,
                'title' => 'Post Title' .$user->id,
                'subtitle' => Str::random(100),
            ]);
        }
    }
}
